const { DataTypes } = require('sequelize');
const db = require('./../config/database');

const Bar = db.define(
    'bar',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
    }
);

module.exports = Bar;
