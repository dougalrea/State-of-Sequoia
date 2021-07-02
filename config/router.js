import express from 'express'
import tests from '../controllers/tests.js'

const router = express.Router()

router.route('/tests')
  .get(tests.index)

export default router