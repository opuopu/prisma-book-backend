import { Request, Response } from "express"
import catchAsync from "../../../shared/catchAsync"
import booksServices from "./book.service"
const getallbooks = catchAsync(async (req: Request, res: Response) => {

    const result = await booksServices.getallbooks()
    res.send({
      success: true,
      statusCode: 200,
      message: 'books retrieved  successfully',
      data: result,
    })
  })
  const createBooks =  catchAsync(async(req:Request,res:Response)=>{
    const result  = await booksServices.createBooks(req.body)
    res.send({
       success:true,
       statusCode:200,
       message:"books  created successfully",
       data:result
    })
    })
    const booksController  ={
   getallbooks,
   createBooks
    }
    export default booksController