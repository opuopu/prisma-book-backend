import { User } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createuser  =  async(data:User):Promise<User>=>{
    const result  =  await prisma.user.create({
        data,
        include:{
            orders:true,
            reviews:true
        }

    })
    return result
}

const userservice ={
    createuser
}
export default userservice