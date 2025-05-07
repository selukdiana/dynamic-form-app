const sequelize = require('../config/db')
const { DataTypes } = require('sequelize')

const PhoneCode = sequelize.define('phoneCode', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  value: { type: DataTypes.STRING },
})

module.exports = PhoneCode