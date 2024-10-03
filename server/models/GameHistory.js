const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class GameHistory extends Model {}
GameHistory.init({
  username: DataTypes.STRING,
  result: DataTypes.STRING,
  score: DataTypes.INTEGER,
}, { sequelize, modelName: 'gameHistory' });

module.exports = GameHistory;
