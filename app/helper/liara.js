const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require("path");
const config = require('config');

const s3Client = new S3Client({
    region: "default",
    endpoint: config.get('LiaraEndpointUrl'),
    credentials: {
        accessKeyId: config.get('LiaraAccessKey'),
        secretAccessKey: config.get('LiaraSecretKey'),
    },
});

const uploadFileToLiara = async (req, res, acl, fileName, callback) => {
    const upload = multer({
        storage: multerS3({
            s3: s3Client,
            bucket: config.get('LiaraBucketName'),
            key: function (req, file, cb) {
                cb(null, 'Reh_' + Date.now() + path.extname(file.originalname));
            },
        }),
    });

    const uploader = upload.single(fileName);
    uploader(req, res, function (err) {
        if (err) {
            console.log(err.message)
            callback(false, req, res);
        } else {
            callback(true, req, res);
        }
    });
};

module.exports = { uploadFileToLiara };
