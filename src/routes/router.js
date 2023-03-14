import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Courses from "../components/Courses/Courses";
import Faq from "../components/Faq/Faq";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";
import Login from "../components/LoginAndRegister/Login";
import Register from "../components/LoginAndRegister/Register";
import CourseDetails from "../components/Courses/CourseDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "courses/:coursesId",
        element: <CourseDetails />,
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/courses/${params.coursesId}`);
        },
      },
    ],
  },
]);

export default router;
