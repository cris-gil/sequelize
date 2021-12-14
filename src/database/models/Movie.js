const db = require("../database/model");

module.exports = (sequelize, DataType) => {

    let alias = "Movies";
    let config = {
        tableName: "movies",
        timestamps: false
    };
    
    const columns = {
        id: {
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            type: dataType.INTEGER
        },

        title: {
            allowNull: false,
            type: dataType.STRING
        },
        rating: {
            allowNull: false,
            type: dataType.DOUBLE
        },
        awards: {
            allowNull: false,
            type: dataType.DOUBLE
        },
        release_date: {
            allowNull: false,
            type: dataType.DATE
        },
        length: {
            allowNull: false,
            type: dataType.DOUBLE
        },
    }

    const options = {
        timestamps: false
    }

    const Movie = sequelize.define(movies, cols, config);

    return Movie;
}

