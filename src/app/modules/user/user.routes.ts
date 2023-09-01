import express from 'express'
import { ENUM_USER_ROLE } from '../../../enums/user'
import auth from '../../middlewares/auth'
import validateRequest from '../../middlewares/validateRequest'
import usercontroller from './user.controller'
import userzodvalidation from './user.validation'

const router  =  express.Router()
 router.get('/',auth(ENUM_USER_ROLE.ADMIN),validateRequest(userzodvalidation.createUserSchema), usercontroller.getalluser)
 router.get('/:id',auth(ENUM_USER_ROLE.ADMIN), usercontroller.getsingleuser)
 router.patch('/:id',auth(ENUM_USER_ROLE.ADMIN), validateRequest(userzodvalidation.updateUserSchema),usercontroller.updateuser)


const userRoutes =  router
export default userRoutes