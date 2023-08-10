'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

// model
db.Visitor = require('./Visitor')(sequelize, Sequelize)
// const a = require('./Visitor')
// b = a(sequelize, Sequelize)
// db.Visitor = b 세줄짜리를 한줄로 축약해서 작성한것.


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;