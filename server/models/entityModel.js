const sequelize = require('../config/db')
const { DataTypes } = require('sequelize')
const Age = require('./ageModel')
const Education = require('./educationModel')
const phoneCode = require('./phoneCodeModel')

const Entity = sequelize.define('entity', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  surname: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  location: { type: DataTypes.STRING },
  isPhoneNumber: { type: DataTypes.STRING },
  phoneNumber: { type: DataTypes.STRING },
  hobbies: {
    type: DataTypes.STRING,
    get: function () { return JSON.parse(this.getDataValue('hobbies')) },
    set: function (val) { this.setDataValue('hobbies', JSON.stringify(val)) }
  }
  // educationId
  // ageId
  // phoneCodeId
})

Entity.belongsTo(Age)
Entity.belongsTo(Education)
Entity.belongsTo(phoneCode)

module.exports = Entity