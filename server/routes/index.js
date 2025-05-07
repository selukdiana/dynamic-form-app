const express = require('express')
const router = express.Router()
const { getAll, createOne, updateOne } = require('../controllers/entityController')
const { getAges, getEducations, getPhoneCodes } = require('../controllers/dataController')
const bodyParser = require('body-parser')

router.get('/api/entities', getAll)
router.patch('/api/entity/:id', bodyParser.json(), updateOne)
router.post('/api/entity', express.json(), createOne)

router.get('/api/ages', getAges)
router.get('/api/educations', getEducations)
router.get('/api/phonecodes', getPhoneCodes)

module.exports = router