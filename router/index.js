import exp from 'constants'
import { Router } from 'express'
import authRoute from './auth.route.js'
import productRoute from './product.route.js'
const router = Router()
import Middleware from '../middleware/index.js'

router.use('/auth', authRoute)
router.use('/product', Middleware.auth, productRoute)

export default router