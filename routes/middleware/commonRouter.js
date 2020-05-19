const express = require('express')
const fs = require("fs")
const router = express.Router({
    mergeParams: true
})
const good = require("../../models/Good")
//资源列表
router.get('/', async (req, res) => {
    //因为parent是一个id，关联了req.Model
    const items = await req.Model.find()
    res.send(items)
})

//资源详情
router.get('/:id', async (req, res) => {
    const items = await req.Model.findById(req.params.id)
    res.send(items)
})

// 创建资源
router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
})
// 批量插入
router.post('/insertMany', async (req, res) => {
    const model = await req.Model.insertMany(req.body)
    res.send(model)
})
// 更新资源
router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
})
//删除资源
router.delete('/:id', async (req, res) => {
    const del = await req.Model.findByIdAndDelete(req.params.id)
    res.send({
        success: true,
        data: del
    })
})
//清空表
router.delete('/', async (req, res) => {
    const del = await req.Model.deleteMany({})
    res.send({
        success: true,
        data: del
    })
})

//删除分类时删除商品数据
router.delete('/category/:id', async (req, res) => {
    const del = await req.Model.findByIdAndDelete(req.params.id)
    const goods = await good.find({category: req.params.id})
    await good.deleteMany({category: req.params.id})
    goods.forEach(function (item) {
        console.log(item);
        let url = item.icon.split("/")
        let filename = url[url.length - 1]
        fs.unlink(__dirname + '/../../../uploads/' + filename, (err) => {
            if (err) {
                console.log(err)
            } else {
            }
        })
    })
    res.send({
        success: true,
        data: del
    })
})


module.exports = router
