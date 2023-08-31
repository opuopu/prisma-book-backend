import express from 'express'
import usercontroller from './user.controller'

const router  =  express.Router()

router.post('/',usercontroller.createauthUser)

const userRoutes =  router
export default userRoutes