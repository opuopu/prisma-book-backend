import { Category } from "@prisma/client";
import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import prisma from "../../../shared/prisma";

// create
const createCategory = async(data:Category):Promise<Category>=>{
    const result = await prisma.category.create({
        data
    })
    return result
}
// update
const updateCategory = async (
    id: string,
    data: Partial<Category>
  ): Promise<Category | null> => {
    const result = await prisma.category.update({
           where:{
            id
           },
           include:{
          books:true
           },
           data
    })
    return result
  }
  // get all
  const getallcateGories = async (): Promise<Category[] | null> => {
    const result = await prisma.category.findMany({
        include:{
            books:true
        }
    })
    if (!result) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'something went wrong')
    }
    return result
  }
  
  // get single user
  const getsingleCategory = async (id: string): Promise<Category | null> => {
    const result = await prisma.category.findUnique({
        where:{
            id
        },
        include:{
            books:true
        }
    })
    return result
  }

  // delete
  const deleteCategory = async (id: string): Promise<Category | null> => {
    const result = await prisma.category.delete({
        where:{
            id
        },
        include:{
            books:true
        }
    })
    return result
  }
  

const categoryServices  = {
    createCategory,
    updateCategory,
    getallcateGories,
    getsingleCategory,
    deleteCategory
}
export default categoryServices