import catchAsync from "../../../shared/catchAsync";

import { Request, Response } from "express";
import categoryServices from "./category.service";

const createCategory =  catchAsync(async(req:Request,res:Response)=>{
const result  = await categoryServices.createCategory(req.body)
res.send({
   success:true,
   statusCode:200,
   message:"Category created successfully",
   data:result
})
})

const updateCategory = catchAsync(async (req: Request, res: Response) => {
    const result = await categoryServices.updateCategory(req.params.id, req.body)
    res.send({
      success: true,
      statusCode: 200,
      message: 'category updated   successfully',
      data: result,
    })
  })

  const getallcateGories = catchAsync(async (req: Request, res: Response) => {

    const result = await categoryServices.getallcateGories()
    res.send({
      success: true,
      statusCode: 200,
      message: 'categories retrieved  successfully',
      data: result,
    })
  })
  
  // getsingle 
  const getsingleCategory = catchAsync(async (req: Request, res: Response) => {
    const result = await categoryServices.getsingleCategory(req.params.id)
    res.send({
      success: true,
      statusCode: 200,
      message: 'category retrieved  successfully',
      data: result,
    })
  })
  


  
  const deleteCategory = catchAsync(async (req: Request, res: Response) => {
    const result = await categoryServices.deleteCategory(req.params.id)
    res.send({
      success: true,
      statusCode: 200,
      message: 'category deleted   successfully',
      data: result,
    })
  })
const categoryController  =  {
    createCategory,
    updateCategory,
    deleteCategory,
getsingleCategory,
    getallcateGories
    
}
export default categoryController