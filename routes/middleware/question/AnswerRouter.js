const express = require('express')
const router = express.Router({
    mergeParams: true
})

const answer = require('../../../models/Answer')
const moment = require("moment")
const {isEmpty} = require("../../../utils/utils");

router.get('/getAnswer', async (req, res) => {
    try {
        const {pageNum = 1, pageSize = 10, person, question} = req.query
        const skipNum = (parseInt(pageNum) - 1) * parseInt(pageSize)
        const condition = {$and: [{}]}
        if (!isEmpty(person)) {
            condition.$and.push({person: person})
        }
        if (!isEmpty(question)) {
            condition.$and.push({question: {$in: question}})
        }
        const total = await answer.countDocuments(condition)
        const data = await answer.find(condition).populate('person').populate('question').populate('option')
            .sort({createTime: -1}).skip(skipNum).limit(parseInt(pageSize)).lean()
        data.map(d => {
            d.createTime = moment(d.createTime).format('YYYY-MM-DD HH:mm:ss')
            return d
        })
        res.json({result: true, total: total, data: data})
    } catch (e) {
        res.json({result: false, message: JSON.stringify(e)})
    }

})

module.exports = router
