// import express from 'express';

// const router = express.Router();

// const moduleRoutes = [
//   // ... routes


//   {
//     path: '/offered-course-class-schedules',
//     route: ""
//   }
// ];

// moduleRoutes.forEach(route => router.use(route.path, route.route));
// export default router;
import express from 'express';
import AuthRoute from '../modules/auth/auth.routes';
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
      }
]
moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;