const express = require('express')
const router = express.Router({
    mergeParams: true
})

const answerModel = require('../../../models/Answer')
const questionModel = require('../../../models/Question')
const moment = require("moment")
const {isEmpty, compare} = require("../../../utils/utils")
const mongoose = require('mongoose')

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
            let objId = d.person._id + "-" + d.question._id + "-" + d.questionType._id
            if (!obj[objId]) {
                d.createTime = moment(d.createTime).format('YYYY-MM-DD')
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
        }).populate({path: 'person', populate: {path: 'role'}})
            .populate('question').populate('questionType').populate({
                path: 'option',
                populate: {
                    path: 'title',
                    populate: {
                        path: 'topic'
                    }
                }
            }).lean()

        let detailList = []
        let answerObj = {
            questionName: '',
            createTime: '',
            personName: '',
            role: ''
        }
        if (answerList.length > 0) {
            answerObj.questionName = answerList[0].question.name
            answerObj.createTime = moment(answerList[0].createTime).format('YYYY-MM-DD')
            answerObj.personName = answerList[0].person.name
            answerObj.role = answerList[0].person.role.chinese
        }
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
        res.json({result: true, data: detailList, answerObj: answerObj})
    } catch (e) {
        res.json({result: false, message: JSON.stringify(e)})
    }

})

router.get('/getAnswerMerge', async (req, res) => {
        try {
            const {pageNum = 1, pageSize = 10, person} = req.query
            const skipNum = (parseInt(pageNum) - 1) * parseInt(pageSize)
            let condition = [
                {
                    $group: {
                        _id: "$person",
                        count: {$sum: 1}
                    }
                },
                {$sort: {createTime: -1}},
                {$skip: skipNum},
                {$limit: parseInt(pageSize)}
            ]
            if (!isEmpty(person)) {
                let pList = []
                person.forEach(p => {
                    pList.push(mongoose.Types.ObjectId(p))
                })
                condition.splice(0, 0, {$match: {person: {$in: pList}}})
            }
            const data = await answerModel.aggregate(condition)

            let countCondition = condition
            if (!isEmpty(person)) {
                countCondition.splice(3)
            } else {
                countCondition.splice(2)
            }
            const countData = await answerModel.aggregate(countCondition)

            if (data.length == 0) {
                res.json({result: true, total: 0, data: []})
            }
            const personList = []
            data.forEach(d => {
                personList.push(d._id)
            })

            const answerList = await answerModel.find({person: {$in: personList}})
                .populate({path: 'person', populate: {path: 'role'}})
                .populate('question').populate('questionType').lean()

            let dataObj = {}
            answerList.forEach(d => {
                let objId = d.person._id + "-" + d.question._id
                if (!dataObj[objId]) {
                    d.createTime = moment(d.createTime).format('YYYY-MM-DD')
                    dataObj[objId] = d
                }
            })

            let objList = Object.values(dataObj)
            let obj = {}
            objList.forEach(d => {
                let objId = d.person._id
                if (!obj[objId]) {
                    obj[objId] = []
                    obj[objId].push({person: d.person, question: d.question, createTime: d.createTime})
                } else {
                    obj[objId].push({person: d.person, question: d.question, createTime: d.createTime})
                }
            })
            const result = []
            for (let v of Object.values(obj)) {
                if (v.length > 0) {
                    let questionList = []
                    v.forEach(que => {
                        questionList.push(que.question)
                    })
                    result.push({
                        person: v[0].person,
                        question: questionList,
                        createTime: v[0].createTime,
                    })
                }
            }
            res.json({result: true, total: countData.length, data: result})
        } catch
            (e) {
            res.json({result: false, message: JSON.stringify(e)})
        }

    }
)

router.get('/getMergeDetail', async (req, res) => {
    try {
        const {personId} = req.query
        const data = await answerModel.find({person: personId}).populate('question')
            .populate({path: 'person', populate: {path: 'role'}}).populate('questionType').lean()

        if (data.length === 0) {
            res.json({result: true, data: []})
        }
        let obj = {}
        const questionType = ['doctor-zero', 'first-visit', 'one-week', 'one-month', 'three-month']
        questionType.forEach(type => {
            data.forEach(d => {
                if (type === d.questionType.name) {
                    let objId = d.person._id + "-" + d.question._id + "-" + d.questionType._id
                    if (!obj[objId]) {
                        d.createTime = moment(d.createTime).format('YYYY-MM-DD')
                        obj[objId] = d
                    }
                }
            })
        })

        const dataList = Object.values(obj)
        const result = []
        for (const list of dataList) {
            let detailList = await getAnswerDetail(list.question._id, list.person._id, list.questionType._id)
            result.push({
                answerObj: list,
                detailList: detailList
            })
        }
        res.json({result: true, data: result})
    } catch (e) {
        res.json({result: false, message: JSON.stringify(e)})
    }

})

const getAnswerDetail = async (questionId, personId, questionTypeId) => {
    const answerList = await answerModel.find({
        question: questionId,
        person: personId,
        questionType: questionTypeId
    }).populate({path: 'person', populate: {path: 'role'}})
        .populate('question').populate('questionType').populate({
            path: 'option',
            populate: {
                path: 'title',
                populate: {
                    path: 'topic'
                }
            }
        }).lean()

    let detailList = []
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
    return detailList
}

module.exports = router
