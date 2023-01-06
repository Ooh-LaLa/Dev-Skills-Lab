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

export {
	index
}