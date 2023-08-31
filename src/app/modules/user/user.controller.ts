import { Request, Response } from "express"
import catchAsync from "../../../shared/catchAsync"
import userservice from "./user.service"

const createauthUser = catchAsync(async (req: Request, res: Response) => {
    const result = await userservice.createuser(req.body)
    res.send({
      success: true,
      statusCode: 200,
      message: 'Users created successfully',
      data: result,
    })
  })

  const usercontroller ={
    createauthUser
  }
  export default usercontroller