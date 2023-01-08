import { Gem } from '../models/gem.js'

function index(req, res) {
    Gem.find({})
    .then(gems => { 
      res.render('gems/index', {
        gems: gems,
        time: req.time
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


  function create(req, res) {
    console.log(req.body)
    req.body.done = false
    Gem.create(req.body)
    .then(gem => {
      res.redirect('/gems')
    })
    .catch(error => {
      console.log(error)
      res.redirect('/gems')
    })
  }


  function show(req, res) {
    Gem.findById(req.params.id)
    .then(gem => {
      res.render('gems/show', {
        gem: gem
      })
    })
    .catch(error => {
      console.log(error)
      res.redirect('/gems')
    })
  }

  function deleteGem(req, res) {
    Gem.findByIdAndDelete(req.params.id)
    .then(gem => {
      res.redirect('/gems')
    })
    .catch(error => {
      console.log(error)
      res.redirect('/gems')
    })
  }
  

export {
	index,
  newGem as new,
  create,
  show,
  deleteGem as delete,
}