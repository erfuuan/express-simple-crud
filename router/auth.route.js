import exp from 'constants'
import { Router } from 'express'
const router = Router()
import controller from '../controller/index.js'

router.post('/signup', controller.auth.signup)
router.post('/login', controller.auth.login)

export default router