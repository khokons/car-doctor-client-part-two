import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookService from "../Pages/BookService/BookService";
import Bookings from "../Pages/Booking/Bookings";
import PrivateRoute from "./PrivateRoute";
import AboutRoute from "../Pages/Home/About/AboutRoute";
import Services from "../Pages/Home/Services/Services";
import Blog from "../Pages/Home/Blog/Blog";
import Contact from "../Pages/Home/Home/Contact/Contact";



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/about',
          element: <AboutRoute></AboutRoute>
        },
        {
          path: '/services',
          element: <Services></Services>
        },
        {
          path: '/blog',
          element: <PrivateRoute><Blog></Blog></PrivateRoute>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },

        {
          path: '/login',
          element: <Login></Login>
        },

        {
          path: '/sign',
          element: <Signup></Signup>
        },

        {
          path: '/book/:id',
          element: <PrivateRoute><BookService></BookService></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/servicesTwo/${params.id}`)
    
        },
        {
          path: '/bookings',
          element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
      ]
    },
  ]);


  export default router;