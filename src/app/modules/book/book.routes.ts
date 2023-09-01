import express from 'express'
import { ENUM_USER_ROLE } from '../../../enums/user'
import auth from '../../middlewares/auth'
import booksController from './book.controller'

const router  = express.Router()
router.post('/create-book',auth(ENUM_USER_ROLE.ADMIN),booksController.createBooks)
router.get('/',booksController.getallbooks)
router.get('/:categoryId/category',booksController.getBooksByCategoryId)
router.get('/:id',booksController.getsingleBook)
router.patch('/:id',auth(ENUM_USER_ROLE.ADMIN),booksController.updateBook)
router.delete('/:id',auth(ENUM_USER_ROLE.ADMIN),booksController.deleteBook)
const booksRoutes  =  router
export default booksRoutes