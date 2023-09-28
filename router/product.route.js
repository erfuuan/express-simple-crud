import { Router } from 'express'
const router = Router()
import controller from '../controller/index.js'

router.get('/', controller.product.getAll)
router.get('/:id', controller.product.getOne)
router.post('/', controller.product.create)
router.put('/:id', controller.product.update)
router.delete('/:id', controller.product.delete)

export default router