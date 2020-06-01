const express = require('express')
const router = express.Router({
    mergeParams: true
})

const optionModel = require('../../../models/Option')
const titleModel = require('../../../models/Title')

const {isEmpty} = require("../../../utils/utils")

router.get('/getOption', async (req, res) => {
    try {
        const {pageNum = 1, pageSize = 10, content, title, question} = req.query
        const skipNum = (parseInt(pageNum) - 1) * parseInt(pageSize)
        const sort = {_id: -1}
        const condition = {
            $and: [
                {content: {$regex: content || '', $options: 'i'}}
            ]
        }
        if (!isEmpty(title)) {
            condition.$and.push({title: {$in: title}})
        }
        const total = await optionModel.countDocuments(condition)
        const result = await optionModel.find(condition).populate('title').sort(sort).skip(skipNum).limit(parseInt(pageSize)).lean()
        let data = []
        if (!isEmpty(question)) {
            result.forEach(res => {
                if (res.title.question == question) {
                    data.push(res)
                }
            })
        } else {
            data = result
        }
        res.json({result: true, total: total, data: data})
    } catch (e) {
        res.json({result: false, message: JSON.stringify(e)})
    }

})

router.post('/addOptionByTitle', async (req, res) => {
    try {
        const {option, optionList, titleId} = req.body
        await optionModel.deleteMany({title: titleId})
        const opData = []
        option.forEach(item => {
            opData.push(
                {
                    name: item.name,
                    content: item.content,
                    title: item.title
                }
            )
        })
        const result = await optionModel.insertMany(opData)
        res.json({result: true, data: result})
    } catch (e) {
        res.json({result: false, message: JSON.stringify(e)})
    }
})

module.exports = router
