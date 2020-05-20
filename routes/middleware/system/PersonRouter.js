const express = require('express')
const router = express.Router({
    mergeParams: true
})

const person = require('../../../models/Person')

router.get('/getPerson',async (req, res)=>{
    try {
        const {pageNum = 1, pageSize = 10, name} = req.query
        const skipNum = (parseInt(pageNum) - 1) * parseInt(pageSize)
        const sort = {_id: -1}
        const condition = {
            $and: [
                {name: {$regex: name || '', $options: 'i'}}
            ]
        }
        const total = await person.countDocuments(condition)
        const data = await person.find(condition).populate('doctor').populate('role').sort(sort).skip(skipNum).limit(parseInt(pageSize)).lean()
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

//资源详情
router.get('/getPersonByDoctor', async (req, res) => {
    try {
        const personList = await person.find().populate('role').lean()
        const items=[]
        personList.map(p=>{
            if(p.role.name==='doctor'){
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
        const {name,number} =req.body
        const personObj=await person.where('name').equals(name).where('number').equals(number)
        if(personObj.length>0){
            res.json({
                result: false,
                message: '该记录已经存在'
            })
        }

        const model = await person.create(req.body)
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
