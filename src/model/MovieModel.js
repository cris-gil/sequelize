const db = require("../database/models");

const MovieModel = {
  findAll: () => {
    let movies = db.Movies.findAll()
    return movies
      .then((res) => {
        return res;
      })
      .catch((err) =>{
        return err
       } );
  },

  findById: (id) => {
    let movies = db.Movies.findById(id);
    return movies
      .then((res) => {
        return res;
      })
      .catch((err) =>{
        return err
       } );
  },
  
};
module.exports = MovieModel;