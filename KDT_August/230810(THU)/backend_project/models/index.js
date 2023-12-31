'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

// model
db.Student = require('./Student')(sequelize)
db.Classes = require('./Classes')(sequelize)

// create relationship
db.Student.hasMany(db.Classes, {foreignKey:'student_id'})
db.Classes.hasMany(db.Student, {foreignKey:'student_id'})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
