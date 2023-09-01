import { User } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';
// get all user
const getallUser = async (): Promise<User[] | null> => {
    const result = await prisma.user.findMany({})
    if (!result) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'something went wrong')
    }
    return result
  }
  
//   get single user 
const getSingleUser = async (id: string): Promise<User | null> => {
    const result = await prisma.user.findUnique({
        where:{
            id
        }
     })
    return result
  }

//   update
const updateUser = async (
    id: string,
    data: Partial<User>
  ): Promise<User | null> => {
    const result = await prisma.user.update({
           where:{
            id
           },
           data
    })
    return result
  }
  

const userservice ={
      getallUser,
      getSingleUser,
      updateUser
}
export default userservice