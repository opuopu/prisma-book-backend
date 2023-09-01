import z from 'zod';

const createUserSchema = z.object({
body:z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  role: z.enum(['admin', 'customer']),
  contactNo: z.string(),
  address: z.string(),
  profileImg: z.string().url(),
})
});
const updateUserSchema = z.object({
    body:z.object({
      name: z.string().optional(),
    email: z.string().email().optional(),
    password: z.string().optional(),
    role: z.enum(['admin', 'customer']).optional(),
    contactNo: z.string().optional(),
    address: z.string().optional(),
    profileImg: z.string().url().optional(),
    })
  });
  

 const userzodvalidation  = {
    createUserSchema,
    updateUserSchema
}
export default userzodvalidation