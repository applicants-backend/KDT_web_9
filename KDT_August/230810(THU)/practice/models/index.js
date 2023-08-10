'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

// const a = require('./Visitor')
// b = a(sequelize, Sequelize)
// db.Visitor = b 세줄짜리를 한줄로 축약해서 작성한것.

// model definition
db.User = require('./User')(sequelize)

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;