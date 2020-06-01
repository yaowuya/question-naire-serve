const express = require('express')
const router = express.Router({
    mergeParams: true
})
const roleModel = require("../../../models/Role")
const qtModel = require("../../../models/QuestionType")
const personModel = require("../../../models/Person")

router.get('/getAllRole', async (req, res) => {
    try {
        const roleList = await roleModel.find()
        const patientId = await roleModel.find({name: 'patient'})
        const qtList = await qtModel.find({role: patientId})
        res.json({result: true, data: {roleList: roleList, qtList: qtList}})
    } catch (e) {
        res.json({result: false, message: JSON.stringify(e)})
    }

})

//小程序登录添加用户信息
router.post('/addPerson', async (req, res) => {
    try {
        // console.log(req.body);
        const {person, role} = req.body
        const {doctorName, doctorNumber, patientName, patientNumber, patientTime} = person
        const roleList = await roleModel.find()
        let dRoleId = ''
        let pRoleId = ''

        roleList.forEach(item => {
            if (item.name === 'doctor') {
                dRoleId = item._id
            }
            if (item.name === 'patient') {
                pRoleId = item._id
            }
        })
        if (role === 'doctor') {
            const questionType = await qtModel.findOne({role: dRoleId})
            const doctor = await personModel.find({name: doctorName, number: doctorNumber})
            const patient = await personModel.find({name: patientName, number: patientNumber})
            if (doctor.length > 0) {
                if (patient.length == 0) {
                    await personModel.create({
                        name: patientName,
                        number: patientNumber,
                        doctor: doctor[0]._id,
                        role: pRoleId
                    })
                }
                res.json({result: true, data: {person: doctor[0]._id, questionType: questionType.name}})
            } else {
                const insertDoctor = await personModel.create({
                    name: doctorName,
                    number: doctorNumber,
                    doctor: null,
                    role: dRoleId
                })
                await personModel.create({
                    name: patientName,
                    number: patientNumber,
                    doctor: insertDoctor._id,
                    role: pRoleId
                })
                res.json({result: true, data: {person: insertDoctor._id, questionType: questionType.name}})
            }
        } else {
            const patient = await personModel.find({name: patientName, number: patientNumber})
            if (patient.length > 0) {
                res.json({result: true, data: {person: patient[0]._id, questionType: patientTime}})
            } else {
                res.json({result: false, message: '请先让医生填写该调查者信息'})
            }
        }
    } catch (e) {
        res.json({result: false, message: JSON.stringify(e)})
    }
})

module.exports = router
