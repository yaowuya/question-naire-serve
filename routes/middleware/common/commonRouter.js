const express = require('express')
const fs = require("fs")
const router = express.Router({
    mergeParams: true
})
//分页查询信息
router.get('/page', async (req, res) => {
    try {
        const {pageNum = 1, pageSize = 10, name} = req.query
        const skipNum = (parseInt(pageNum) - 1) * parseInt(pageSize)
        const sort = {_id: -1}
        const condition = {
            $and: [
                {name: {$regex:name || '', $options: 'i'}}
            ]
        }
        const total = await req.Model.countDocuments(condition)
        const data = await req.Model.find(condition).sort(sort).skip(skipNum).limit(parseInt(pageSize)).lean()
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
//资源列表
router.get('/', async (req, res) => {
    try {
        const items = await req.Model.find()
        res.json({
            result: true,
            data: items
        })
    } catch (e) {
        res.json({
            result: false,
            message: JSON.stringify(e)
        })
    }

})

//资源详情
router.get('/:id', async (req, res) => {
    try {
        const items = await req.Model.findById(req.params.id)
        res.json({
            result: true,
            data: items
        })
    } catch (e) {
        res.json({
            result: false,
            message: JSON.stringify(e)
        })
    }

})

// 创建资源
router.post('/', async (req, res) => {
    try {
        const model = await req.Model.create(req.body)
        res.json({
            result: true,
            data: model
        })
    } catch (e) {
        res.json({
            result: false,
            message: JSON.stringify(e)
        })
    }
})
// 批量插入
router.post('/insertMany', async (req, res) => {
    try {
        const model = await req.Model.insertMany(req.body)
        res.json({
            result: true,
            data: model
        })
    } catch (e) {
        res.json({
            result: false,
            message: JSON.stringify(e)
        })
    }

})
// 更新资源
router.put('/:id', async (req, res) => {
    try {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        res.json({
            result: true,
            data: model
        })
    } catch (e) {
        res.json({
            result: false,
            message: JSON.stringify(e)
        })
    }

})
//删除资源
router.delete('/:id', async (req, res) => {
    try {
        const del = await req.Model.findByIdAndDelete(req.params.id)
        res.json({
            result: true,
            data: del
        })
    } catch (e) {
        res.json({
            result: false,
            message: JSON.stringify(e)
        })
    }
})
//清空表
router.delete('/', async (req, res) => {
    try {
        const del = await req.Model.deleteMany({})
        res.json({
            result: true,
            data: del
        })
    } catch (e) {
        res.json({
            result: false,
            message: JSON.stringify(e)
        })
    }

})


module.exports = router
