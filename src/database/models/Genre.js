const db = require("../database/model");

module.exports = (sequelize, DataType) => {

    let alias = "Genres";
    let config = {
        tableName: "genre",
        timestamps: false
    };
    const genresModel = 'Genres'
    const cols = {
        id: {
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        created_at: {
            allowNull: false,
            type: dataTypes.DATE
        },
        name: {
            allowNull: false,
            type: dataTypes.STRING
        },
        rating: {
            allowNull: false,
            type: dataTypes.DOUBLE
        },
        ranking: {
            allowNull: false,
            type: dataTypes.DOUBLE
        },

        active: {
            allowNull: false,
            type: dataTypes.DOUBLE
        },
    }

    const aliass = {
        timestamps: false
    }

    const Genre = sequelize.define(genres, cols, alias);

    return Genre;
}