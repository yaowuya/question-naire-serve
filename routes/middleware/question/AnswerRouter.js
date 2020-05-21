const express = require('express')
const router = express.Router({
    mergeParams: true
})

const answer = require('../../../models/Answer')
const moment = require("moment")

router.get('/getAnswer', async (req, res) => {
    try {
        const {pageNum = 1, pageSize = 10, name} = req.query
        const skipNum = (parseInt(pageNum) - 1) * parseInt(pageSize)
        const sort = {_id: -1}
        // const condition = {
        //     $and: [
        //         {name: {$regex: name || '', $options: 'i'}}
        //     ]
        // }
        const total = await answer.countDocuments()
        const data = await answer.find().populate('person').populate('question').populate('option').sort(sort).skip(skipNum).limit(parseInt(pageSize)).lean()
        data.map(d=>{
            d.createTime=moment(d.createTime).format('YYYY-MM-DD HH:mm:ss')
            return d
        })
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

module.exports = router
