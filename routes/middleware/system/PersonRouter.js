const express = require('express')
const router = express.Router({
    mergeParams: true
})

const personModel = require('../../../models/Person')

router.get('/getPerson', async (req, res) => {
    try {
        const {pageNum = 1, pageSize = 10, name} = req.query
        const skipNum = (parseInt(pageNum) - 1) * parseInt(pageSize)
        const sort = {_id: -1}
        const condition = {
            $and: [
                {name: {$regex: name || '', $options: 'i'}}
            ]
        }
        const total = await personModel.countDocuments(condition)
        const data = await personModel.find(condition).populate('doctor').populate('role').sort(sort).skip(skipNum).limit(parseInt(pageSize)).lean()
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

router.get('/getAllPerson', async (req, res) => {
    try {
        const items = await personModel.find().populate('role').lean()
        res.json({result: true, data: items})
    } catch (e) {
        res.json({result: false, message: JSON.stringify(e)})
    }
})

router.get('/getPersonByDoctor', async (req, res) => {
    try {
        const personList = await personModel.find().populate('role').lean()
        const items = []
        personList.map(p => {
            if (p.role.name === 'doctor') {
                items.push(p)
            }
        })
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

router.post('/addPerson', async (req, res) => {
    try {
        const {name, number} = req.body
        const personObj = await personModel.where('name').equals(name).where('number').equals(number)
        if (personObj.length > 0) {
            res.json({
                result: false,
                message: '该记录已经存在'
            })
        }

        const model = await personModel.create(req.body)
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


module.exports = router
