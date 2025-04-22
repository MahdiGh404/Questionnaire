const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const winston = require('winston');
require('express-async-errors');
require('winston-mongodb');
const config = require('config');
const createError = require('http-errors');
const api = require('./routes/api');
const ErrorMiddleware = require('./http/middleware/Error');


class Application {

    constructor() {
        this.setupExpressServer()
        this.setupMongoose()
        this.setupRoutesAndMiddlewares()
        this.setupConfigs()
    }


    setupExpressServer() {

        const port = config.get("PORT") || 3010
        app.listen(port, (err) => {
            if (err) {
                console.log(err.message);
                winston.error(err.message);
            } else {
                console.log(`Peyman listen to port ${port}`)
            }
        })

    }

    async setupMongoose() {
        await mongoose.connect(config.get("DatabaseAddress"), {useUnifiedTopology: true}).then(() => {
            console.log("Peyman database connected")
        }).catch((err) => {
            console.log(err.message);
            winston.log(err.message)
        })

    }

    setupRoutesAndMiddlewares() {
        app.use(express.static(path.join(__dirname, 'public')));
        app.use(express.json({limit: '50mb'}));
        app.use(express.urlencoded({extended: true}));
        app.use(morgan('tiny'));
        app.use(cookieParser());
        app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*')
            res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
            next();
        })
        app.use(ErrorMiddleware)
        app.use('/api', api)
        // view engine setup
        app.set('views', path.join(__dirname, 'views'));
        app.set('view engine', 'ejs');

        // // catch 404 and forward to error handler
        // app.use(function (req, res, next) {
        //     next(createError(404));
        // });
        //
        // // error handler
        // app.use(function (err, req, res) {
        //     // set locals, only providing error in development
        //     res.locals.message = err.message;
        //     res.locals.error = req.app.get('env') === 'development' ? err : {};
        //
        //     // render the error page
        //     res.status(err.status || 500);
        //     res.render('error');
        // });

    }

    setupConfigs() {
        winston.add(new winston.transports.File({filename: 'error-log.log'}))
        winston.add(new winston.transports.MongoDB({
            db: config.get('DatabaseAddress'), options: {
                useUnifiedTopology: true,
            }, collection: 'serverErrors'
        }))
        process.on("uncaughtException", (err) => {
            console.log(err)
            winston.error(err.stack)
        })
        process.on("unhandledRejection", (err) => {
            console.log(err)
            winston.error(err.stack)
        })
    }
}

module.exports = Application

