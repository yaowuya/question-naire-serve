const express = require('express')
const router = express.Router({
    mergeParams: true
})

const title = require('../../../models/Title')

router.get('/getTitle', async (req, res) => {
    try {
        const {pageNum = 1, pageSize = 10, name} = req.query
        const skipNum = (parseInt(pageNum) - 1) * parseInt(pageSize)
        const sort = {_id: -1}
        const condition = {
            $and: [
                {name: {$regex: name || '', $options: 'i'}}
            ]
        }
        const total = await title.countDocuments(condition)
        const data = await title.find(condition).populate('topic').populate('question').sort(sort).skip(skipNum).limit(parseInt(pageSize)).lean()
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
