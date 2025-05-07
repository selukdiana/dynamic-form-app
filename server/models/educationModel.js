const sequelize = require('../config/db')
const { DataTypes } = require('sequelize')

const Education = sequelize.define('education', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  value: { type: DataTypes.STRING },
})

module.exports = Education