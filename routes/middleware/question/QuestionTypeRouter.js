const express = require('express')
const router = express.Router({
    mergeParams: true
})

const questionTypeModel = require('../../../models/QuestionType')

router.get('/getQuestionType', async (req, res) => {
    try {
        const {pageNum = 1, pageSize = 10, name} = req.query
        const skipNum = (parseInt(pageNum) - 1) * parseInt(pageSize)
        const sort = {_id: -1}
        const condition = {
            $and: [
                {name: {$regex:name || '', $options: 'i'}}
            ]
        }
        const total = await questionTypeModel.countDocuments(condition)
        const data = await questionTypeModel.find(condition).populate('role').sort(sort).skip(skipNum).limit(parseInt(pageSize)).lean()
        res.json({result: true,total: total, data: data})
    } catch (e) {
        res.json({result: false, message: JSON.stringify(e)})
    }

})

module.exports = router
