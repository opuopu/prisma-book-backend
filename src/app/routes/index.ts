
import express from 'express';
import AuthRoute from '../modules/auth/auth.routes';

import profileRoutes from '../modules/auth/profile.route';
import booksRoutes from '../modules/book/book.routes';
import categoryRoutes from '../modules/category/category.routes';
import orderRoutes from '../modules/order/order.routes';
import userRoutes from '../modules/user/user.routes';
const router  = express.Router()

const moduleRoutes =[
    {
        path: "/users",
        route: userRoutes
      },
      {
        path:"/auth",
        route:AuthRoute
      },
      {
        path:"/categories",
        route:categoryRoutes
      },
      {
        path:"/books",
        route:booksRoutes
      },
      {
        path:"/orders",
        route:orderRoutes

      },
      {
        path:"/profile",
        route:profileRoutes
      }
]
moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;