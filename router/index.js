import exp from 'constants'
import { Router } from 'express'
import authRoute from './auth.route.js'
import productRoute from './product.route.js'
const router = Router()

router.use('/auth', authRoute)
router.use('/product', productRoute)

export default router