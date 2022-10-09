const db = require("../config/sequelize");
const { DataTypes } = require("sequelize");

const Livros = db.define("Livros",
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        titulo: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        autor: {
            type: DataTypes.STRING(60),
            allowNull: false,
        },
        descricao: {
            type: DataTypes.TEXT(150),
            allowNull: false,
        },
        valor: {
            type: DataTypes.INTEGER(60),
            allowNull: false,
        },
    },
    {
        timestamps: false,
        tableName: "livros",
    }
)


module.exports = Livros;