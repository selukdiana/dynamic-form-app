const sequelize = require('../config/db')
const { DataTypes } = require('sequelize')

const Age = sequelize.define('age', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  value: { type: DataTypes.STRING },
})

module.exports = Age