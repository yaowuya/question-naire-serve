const express = require('express')
const router = express.Router({
    mergeParams: true
})
const questionModel = require("../../../models/Question")
const qtModel = require("../../../models/QuestionType")
const titleModel = require("../../../models/Title")

router.get('/getQuestionInfo', async (req, res) => {
    try {
        const {questionType} = req.query
        const qtObj=await qtModel.findOne({name:questionType}).lean()
        const question =await questionModel.find({questionType: {$elemMatch: {$eq: qtObj._id}}})
        const titleList =await titleModel.find({question: question[0]._id}).populate('topic')
            .populate('option').lean()
        res.json({
            result: true,
            data: {
                question: question,
                titleList: titleList
            }
        })
    } catch (e) {
        res.json({result: false, message: JSON.stringify(e)})
    }

})

module.exports = router
