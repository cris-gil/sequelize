const db = require("../database/model");

module.exports = (sequelize, DataType) => {

    let alias = "Movies";
    let config = {
        tableName: "movies",
        timestamps: false
    };
    
    const cols = {
        id: {
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            type: DataType.INTEGER
        },

        title: {
            allowNull: false,
            type: DataType.STRING
        },
        rating: {
            allowNull: false,
            type: DataType.DOUBLE
        },
        awards: {
            allowNull: false,
            type: DataType.DOUBLE
        },
        release_date: {
            allowNull: false,
            type: DataType.DATE
        },
        length: {
            allowNull: false,
            type: DataType.DOUBLE
        },
    }

    const alias = {
        timestamps: false
    }

    const Movie = sequelize.define(movies, cols, alias);

    return Movie;
}

