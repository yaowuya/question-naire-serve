const express = require('express')
const router = express.Router({
    mergeParams: true
})

const title = require('../../../models/Title')

router.get('/getTitle', async (req, res) => {
    try {
        const {pageNum = 1, pageSize = 10, name, question} = req.query
        const skipNum = (parseInt(pageNum) - 1) * parseInt(pageSize)
        const sort = {order: 1}
        const condition = {
            $and: [
                {name: {$regex: name || '', $options: 'i'}},
            ]
        }
        if (question && question != '') {
            condition.$and.push({question: question})
        }
        const total = await title.countDocuments(condition)
        const data = await title.find(condition).populate('topic').populate('question').sort(sort).skip(skipNum).limit(parseInt(pageSize)).lean()
        res.json({
            result: true,
            total: total,
            data: data
        })
    } catch (e) {
        res.json({
            result: false,
            message: JSON.stringify(e)
        })
    }

})

router.get('/getTitleByQuestion', async (req, res) => {
    try {
        const {question} = req.query
        const data = await title.find({question: question || null}, "_id name order").sort({order: 1}).lean()
        res.json({result: true, data: data})
    } catch (e) {
        res.json({result: false, message: JSON.stringify(e)})
    }

})

router.get('/getTitleAndOption', async (req, res) => {
    try {
        const {titleId} = req.query
        const data = await title.find({_id: titleId || null}).populate('option').lean()
        res.json({result: true, data: data})
    } catch (e) {
        res.json({result: false, message: JSON.stringify(e)})
    }

})

module.exports = router
