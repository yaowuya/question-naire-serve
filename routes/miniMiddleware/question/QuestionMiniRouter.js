const express = require('express')
const router = express.Router({
    mergeParams: true
})
const questionModel = require("../../../models/Question")
const qtModel = require("../../../models/QuestionType")
const titleModel = require("../../../models/Title")
const answerModel = require("../../../models/Answer")

router.get('/getQuestionInfo', async (req, res) => {
    try {
        const {questionId} = req.query
        // const question =await questionModel.find({questionType: {$elemMatch: {$eq: qtObj._id}}})
        const question = await questionModel.findOne({questionId: questionId})
        const titleList = await titleModel.find({question: question._id}).sort({order: 1}).populate('topic')
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

router.post('/addAnswer', async (req, res) => {
    try {
        const {titleList, personId, questionId, questionType} = req.body
        // console.log(titleList);
        const qtObj = await qtModel.findOne({name: questionType})
        const answerList = []
        titleList.forEach(title => {
            let option = []
            let answerContent = ""
            if (title.topicType === 'single') {
                option.push(title.content)
            }
            if (title.topicType === 'multiple') {
                option = title.content
            }
            if (title.topicType === 'input') {
                option.push(title.option[0]._id)
                answerContent = title.content
            }
            answerList.push({
                person: personId,
                question: questionId,
                questionType: qtObj._id,
                option: option,
                content: answerContent
            })
        })
        await answerModel.deleteMany({person: personId, question: questionId,questionType:qtObj._id})
        await answerModel.insertMany(answerList)
        res.json({result: true})
    } catch (e) {
        res.json({result: false, message: JSON.stringify(e)})
    }
})

module.exports = router
