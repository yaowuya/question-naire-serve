const express = require('express')
const router = express.Router({
    mergeParams: true
})

const question = require('../../../models/Question')

router.get('/getQuestion', async (req, res) => {
    try {
        const {pageNum = 1, pageSize = 10, name} = req.query
        const skipNum = (parseInt(pageNum) - 1) * parseInt(pageSize)
        const sort = {questionId: 1}
        const condition = {
            $and: [
                {name: {$regex: name || '', $options: 'i'}}
            ]
        }
        const total = await question.countDocuments(condition)
        const data = await question.find(condition).populate('questionType').sort(sort).skip(skipNum).limit(parseInt(pageSize)).lean()
        res.json({result: true, total: total, data: data})
    } catch (e) {
        res.json({result: false, message: JSON.stringify(e)})
    }

})

router.post('/addQuestion', async (req, res) => {
    try {
        const {_id, ...params} = req.body
        const model = await question.create(params)
        res.json({result: true, data: model})
    } catch (e) {
        res.json({result: false, message: JSON.stringify(e)})
    }

})

router.put('/editQuestion', async (req, res) => {
    try {
        const {_id, ...params} = req.body
        const model = await question.findByIdAndUpdate(_id, params)
        res.json({result: true, data: model})
    } catch (e) {
        res.json({result: false, message: JSON.stringify(e)})
    }

})
router.delete('/deleteQuestion', async (req, res) => {
    try {
        const {_id} = req.query
        const del = await question.findByIdAndDelete(_id)
        res.send({result: true, data: del})
    } catch (e) {
        res.json({result: false, message: JSON.stringify(e)})
    }

})

module.exports = router
