const express = require('express')
const router = express.Router({
    mergeParams: true
})

const answerModel = require('../../../models/Answer')
const questionModel = require('../../../models/Question')
const moment = require("moment")
const {isEmpty, compare} = require("../../../utils/utils")

// router.get('/getAnswer', async (req, res) => {
//     try {
//         const {pageNum = 1, pageSize = 10, person, question} = req.query
//         const skipNum = (parseInt(pageNum) - 1) * parseInt(pageSize)
//         const condition = {$and: [{}]}
//         if (!isEmpty(person)) {
//             condition.$and.push({person: person})
//         }
//         if (!isEmpty(question)) {
//             condition.$and.push({question: {$in: question}})
//         }
//         const total = await answer.countDocuments(condition)
//         const data = await answer.find(condition).populate('person').populate('question').populate('option')
//             .sort({createTime: -1}).skip(skipNum).limit(parseInt(pageSize)).lean()
//         data.map(d => {
//             d.createTime = moment(d.createTime).format('YYYY-MM-DD HH:mm:ss')
//             return d
//         })
//         res.json({result: true, total: total, data: data})
//     } catch (e) {
//         res.json({result: false, message: JSON.stringify(e)})
//     }
//
// })
router.get('/getAnswer', async (req, res) => {
    try {
        const {pageNum = 1, pageSize = 10, person, question, questionType} = req.query
        const skipNum = (parseInt(pageNum) - 1) * parseInt(pageSize)
        const limit = parseInt(skipNum + pageSize)
        const condition = {$and: [{}]}
        if (!isEmpty(person)) {
            condition.$and.push({person: person})
        }
        if (!isEmpty(question)) {
            condition.$and.push({question: {$in: question}})
        }
        if (!isEmpty(questionType)) {
            condition.$and.push({questionType: {$in: questionType}})
        }
        const data = await answerModel.find(condition).populate('person').populate('question')
            .populate('option').populate('questionType').sort({createTime: -1}).lean()
        let obj = {}
        data.forEach(d => {
            let objId = d.person._id + "-" + d.question._id
            if (!obj[objId]) {
                d.createTime = moment(d.createTime).format('YYYY-MM-DD HH:mm:ss')
                obj[objId] = d
            }
        })
        const result = Object.values(obj)
        const total = result.length
        const pageResult = []
        for (let i = 0; i < total; i++) {
            if (i >= skipNum && i < limit) {
                pageResult.push(result[i])
            }
        }
        res.json({result: true, total: total, data: pageResult})
    } catch (e) {
        res.json({result: false, message: JSON.stringify(e)})
    }

})

router.delete('/deleteAnswer', async (req, res) => {
    try {
        const {questionId, personId, questionTypeId} = req.query
        await answerModel.deleteMany({person: personId, question: questionId, questionType: questionTypeId})
        res.json({result: true})
    } catch (e) {
        res.json({result: false, message: JSON.stringify(e)})
    }
})

router.get('/getAnswerDetail', async (req, res) => {
    try {
        const {questionId, personId, questionTypeId} = req.query
        const answerList = await answerModel.find({
            question: questionId,
            person: personId,
            questionType: questionTypeId
        }).populate('person').populate('question').populate('questionType').populate({
            path: 'option',
            populate: {
                path: 'title',
                populate: {
                    path: 'topic'
                }
            }
        }).lean()

        let detailList = []
        const questionName = answerList[0].question.name
        answerList.forEach(item => {
            let title = item.option[0].title
            let optionList = item.option
            optionList.sort(compare('name', 'asc'))
            detailList.push({
                title: title.name,
                order: title.order,
                topic: title.topic.name,
                option: optionList,
                content: item.content
            })
        })
        detailList.sort(compare('order', 'asc'))
        res.json({result: true, data: detailList, questionName: questionName})
    } catch (e) {
        res.json({result: false, message: JSON.stringify(e)})
    }

})


module.exports = router
