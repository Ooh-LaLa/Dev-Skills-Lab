import { gems } from '../data/gem-data.js'

function index(req, res) {
  res.render('gems/index', {
    gems: gems
  })
}

export {
	index
}