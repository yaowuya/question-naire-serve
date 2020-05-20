const express = require('express')
const router = express.Router({
    mergeParams: true
})

const option = require('../../../models/Option')

router.get('/getOption', async (req, res) => {
    try {
        const {pageNum = 1, pageSize = 10, name} = req.query
        const skipNum = (parseInt(pageNum) - 1) * parseInt(pageSize)
        const sort = {_id: -1}
        const condition = {
            $and: [
                {name: {$regex: name || '', $options: 'i'}}
            ]
        }
        const total = await option.countDocuments(condition)
        const data = await option.find(condition).populate('title').sort(sort).skip(skipNum).limit(parseInt(pageSize)).lean()
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
