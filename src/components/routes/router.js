import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Courses from "../Courses/Courses";
import Faq from "../Faq/Faq";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
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
    ],
  },
]);

export default router;
