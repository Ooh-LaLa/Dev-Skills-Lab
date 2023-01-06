import { Gem } from '../models/gem.js'

function index(req, res) {
    Gem.find({})
    .then(gems => { 
      res.render('gems/index', {
        gems: gems,
      })
    })
    .catch(error => { 
      console.log(error)
      res.redirect('/')
    })
  }

  function newGem(req, res) {
    res.render('gems/new')
  }

export {
	index,
  newGem as new
}