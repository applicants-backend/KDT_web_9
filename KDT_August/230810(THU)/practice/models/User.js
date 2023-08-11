const { DataTypes } = require("sequelize");
const { sequelize } = require(".")

const UserModel = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        id : {
            type: DataTypes.INTEGER,
            allowNull : false,
            primaryKey : true,
            autoIncrement : true
        },
        userid : {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        pw: {
            type: DataTypes.STRING(20),
            allowNull: false,
        }
    })
    return User;
}

module.exports.UserModel