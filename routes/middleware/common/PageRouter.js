const express = require('express')
const router = express.Router({
    mergeParams: true
})
//分页查询信息
router.post('/photo/pageList', async (req, res) => {
    const { pageNum = 1, pageSize = 10, name, sort } = req.body
    const skipNum = (pageNum - 1) * pageSize
    const condition = {
        $and: [
            { name: { $regex: name, $options: 'i' } }
        ]
    }
    const count = await req.Model.countDocuments(condition)
    const data = await req.Model.find(condition).sort(sort).skip(skipNum).limit(pageSize)
    res.json({
        count: count,
        data: data
    })
})
//分页分类信息
router.post('/good/pageList', async (req, res) => {
    const { pageNum = 1, pageSize = 10, name, sort } = req.body
    const skipNum = (pageNum - 1) * pageSize
    const condition = {
        $and: [
            { name: { $regex: name, $options: 'i' } }
        ]
    }
    const count = await req.Model.countDocuments(condition)
    const data = await req.Model.find(condition).populate('category').sort(sort).skip(skipNum).limit(pageSize)
    res.json({
        count: count,
        data: data
    })
})
module.exports = router
