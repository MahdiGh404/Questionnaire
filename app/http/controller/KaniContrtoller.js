const addErrorLog = require('../../helper/ErrorHandler');
const QuestionnaireModel = require("../../models/Questionnaire")

class KhaniController {
    async SaveQuestionnaire(req, res) {
        try {
            // دریافت داده‌های پرسشنامه از بدنه درخواست
            const questionnaireData = req.body;

            // ایجاد یک نمونه جدید از مدل پرسشنامه
            const newQuestionnaire = new QuestionnaireModel(questionnaireData);

            // ذخیره پرسشنامه در دیتابیس
            const savedQuestionnaire = await newQuestionnaire.save();

            // ارسال پاسخ موفقیت‌آمیز
            res.send({
                success: true,
                result: 'پرسشنامه با موفقیت ذخیره شد',
                data: {
                    id: savedQuestionnaire._id
                }
            });
        } catch (error) {
            console.error('خطا در ذخیره پرسشنامه:', error);

            // بررسی خطاهای اعتبارسنجی مانگو
            if (error.name === 'ValidationError') {
                return res.send({
                    success: false,
                    result: 'خطا در اعتبارسنجی داده‌ها',
                    errors: Object.values(error.errors).map(err => err.message)
                });
            }

            // بررسی خطای یکتا بودن
            if (error.code === 11000) {
                return res.send({
                    success: false,
                    result: 'اطلاعات تکراری وارد شده است'
                });
            }

            // سایر خطاها
            res.send({
                success: false,
                result: 'خطای سمت سرور در ذخیره پرسشنامه'
            });
        }
    }

    async GetAllQuestionnaire(req, res) {
        try {
            // actually execute the query and return plain JS objects
            const questionnaires = await QuestionnaireModel.find().lean();

            return res.status(200).json({
                success: true,
                result: questionnaires
            });
        } catch (error) {
            console.error('خطا در دریافت پرسشنامه:', error);
            await addErrorLog(req, res, error, 0);
            return res.status(500).json({
                success: false,
                message: 'خطا در دریافت پرسشنامه'
            });
        }
    }

     async RenderQuestionnairesTable(req, res) {
    try {
      const questionnaires = await QuestionnaireModel.find().lean();
      return res.render('questionnaires', { questionnaires });
    } catch (err) {
      await addErrorLog(req, res, err, 0);
    }
  }

}

module.exports = new KhaniController
