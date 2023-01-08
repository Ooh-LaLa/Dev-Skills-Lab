import { Router } from 'express'
import * as gemsCtrl from '../controllers/gems.js'

const router = Router()

/* GET gems listing. */
router.get('/', gemsCtrl.index)

// GET localhost:3000/todos/new
router.get('/new', gemsCtrl.new)


router.get('/:id', gemsCtrl.show) 


// POST localhost:3000/todos
router.post('/', gemsCtrl.create)


router.delete('/:id', gemsCtrl.delete)

export {
  router
}
