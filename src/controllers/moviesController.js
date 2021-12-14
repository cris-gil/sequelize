const model = require("../model/MovieModel");

const moviesController = {
  list: (req, res, next) => {
      model.findAll()
      .then((movies) => {res.render("moviesList", {movies:movies})
      })
      .catch((err) =>{
        next(err)
      });
  },
  detail:(req, res, next) => {
    id=req.params.id
    let movie = model.findById(id)
    movie.then((m) => {
        for(let i=0; i<m.length; i++){
            if (m[i].id == id) {
                res.render('moviesDetail',{movie:m[i]})
            }
        }
    })
      .catch((err) =>{
        next(err)
      }); 
  }
};

module.exports = moviesController;

/* const moviesController = {
    getHome: (req, res, next) => {
      const MoviesList = model.MoviesList.findAll();
      MovieModel.then((movies) => {
        res.render("index", {data: movies});
      }).catch((err) => {
        next(err);
      });
    },
}

module.exports = moviesController; */
