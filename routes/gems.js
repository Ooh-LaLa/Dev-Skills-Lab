import { Router } from 'express'
import * as gemsCtrl from '../controllers/gems.js'

const router = Router()

/* GET gems listing. */
router.get('/', gemsCtrl.index)


export {
  router
}
