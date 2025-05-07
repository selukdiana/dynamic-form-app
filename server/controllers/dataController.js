const Age = require('../models/ageModel')
const Education = require('../models/educationModel')
const PhoneCode = require('../models/phoneCodeModel')

exports.getAges = async (req, res) => {
  const data = await Age.findAll()
  res.json(data)
}

exports.getEducations = async (req, res) => {
  const data = await Education.findAll()
  res.json(data)
}

exports.getPhoneCodes = async (req, res) => {
  const data = await PhoneCode.findAll()
  res.json(data)
}