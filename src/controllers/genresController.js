const db = require("../database/models/index.js");

const genresController = {
    getHome: (req, res, next) => {
      const GenresModel = model.GenreModel.findAll();
      ActorModel.then((genres) => {
        res.render("index", {data: genres});
      }).catch((err) => {
        next(err);
      });
    },
}

module.exports = genresController;