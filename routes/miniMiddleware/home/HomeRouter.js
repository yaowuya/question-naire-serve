const express = require('express')
const router = express.Router({
    mergeParams: true
})
const roleModel=require("../../../models/Role")
//资源列表
router.get('/getAllRole', async (req, res) => {
    try {
        const items = await roleModel.find()
        res.json({result: true, data: items})
    } catch (e) {
        res.json({result: false, message: JSON.stringify(e)})
    }

})
module.exports = router
