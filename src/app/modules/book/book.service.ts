import { Book } from "@prisma/client"
import httpStatus from "http-status"
import ApiError from "../../../errors/ApiError"
import prisma from "../../../shared/prisma"

const createBooks = async(data:Book):Promise<Book>=>{
    const result = await prisma.book.create({
        data,
        include:{
            category:true,
           
        }
    })
    return result
}
const getallbooks = async (): Promise<Book[] | null> => {
    const result = await prisma.book.findMany({
        include:{
            category:true
        }
    })
    if (!result) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'something went wrong')
    }
    return result
  }

const booksServices ={
    createBooks,
    getallbooks
}
export default booksServices