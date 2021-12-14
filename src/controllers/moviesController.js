const model = require("../model/MovieModel");
//const Op = model.Sequelize.Op;

const moviesController = {
  list: (req, res, next) => {
      model.findAll()
      .then((movie) => {res.render("moviesList", {movies:movies})
      })
      .catch((err) =>{
        next(err)
      });
  },
  detail:(req, res, next) => {
    id=req.params.id
    movie.findById(id)
    movie.then((movie) => {
        for(let i=0; i<DeviceMotionEvent.length; i++){
            if (movie[i].id == id) {
                res.render('moviesDetail',{movie:movies[i]})
            }
        }
    })
      .catch((err) =>{
        next(err)
      }); 
  },
  new: (req, res, next) => {
    movie.findAll({
      order:[
        ['title', 'ASC']
      ]
    })
      .then((movies) => {
      res.render("new", {movies:movies})
  }) 
  .catch((err) =>{
    next(err)
  });
},
recommended: (req, res, next) => {
  movie.findAll({
  where: {
    release_date: {[Op.lt]: new Date(),
                   [Op.gt]: new Date(new Date() - 24 * 60 * 60 * 1000)}
}
})
  .then((movie) => {res.render("recommended", {movies:movies})
})

.catch((err) =>{
  next(err)
});
},
};

module.exports = moviesController;