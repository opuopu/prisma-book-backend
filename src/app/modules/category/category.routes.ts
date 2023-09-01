import express from 'express'
import { ENUM_USER_ROLE } from '../../../enums/user'
import auth from '../../middlewares/auth'
import categoryController from './category.controller'

const router  = express.Router()

router.post('/create-category',auth(ENUM_USER_ROLE.ADMIN),categoryController.createCategory)
router.get('/',auth(ENUM_USER_ROLE.ADMIN),categoryController.getallcateGories)
router.get('/:id',auth(ENUM_USER_ROLE.ADMIN),categoryController.getallcateGories)
router.patch('/:id',auth(ENUM_USER_ROLE.ADMIN),categoryController.updateCategory)
router.delete('/:id',auth(ENUM_USER_ROLE.ADMIN),categoryController.deleteCategory)
const categoryRoutes =  router
export default categoryRoutes