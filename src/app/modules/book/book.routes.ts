import express from 'express'
import { ENUM_USER_ROLE } from '../../../enums/user'
import auth from '../../middlewares/auth'
import booksController from './book.controller'

const router  = express.Router()
router.post('/create-book',auth(ENUM_USER_ROLE.ADMIN),booksController.createBooks)
router.get('/',booksController.getallbooks)
router.get('/category/:categoryId',booksController.getBooksByCategoryId)
const booksRoutes  =  router
export default booksRoutes