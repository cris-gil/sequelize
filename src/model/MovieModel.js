const db = require("../database/models");

const MovieModel = {
  findAll: () => {
    let movie = db.Movies.findAll()
    return movie
      .then((res) => {
        return res;
      })
      .catch((err) =>{
        return err
       } );
  },

  findById: (id) => {
    let movie = db.Movies.findById(id);
    return movie
      .then((res) => {
        return res;
      })
      .catch((err) =>{
        return err
       } );
  },
};
module.exports = MovieModel;