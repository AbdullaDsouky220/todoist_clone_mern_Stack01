import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error-page";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/auth/LoginPage";
import SignUpPage from "../pages/auth/SignUp";
import AppPage from "../pages/App/AppPage";
import ProjectPage from "../components/app/projectpage/ProjectPage";
import FilterPage from "../components/app/filterPage/FilterPage";
import TodayPage from "../components/app/todayPage/TodayPage";
import Upcoming from "../components/app/upcomingPage/Upcoming";

const routes = [
  {
    path: '/',
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/app',
    element: <AppPage/>,
    children:[
      {
        path:'/app/project',
        element:<ProjectPage/>
      },
      {
        path:'/app/filters-labels',
        element:<FilterPage/>
      },
      {
        path:'/app/today',
        element:<TodayPage/>
      },
      {
        path:'/app/upcoming',
        element:<Upcoming/>
      },
    ]
  },
  {
    path: 'auth/login',
    element: <LoginPage />,
  },
  {
    path: 'auth/signup',
    element: <SignUpPage />,
  },
];

const router=createBrowserRouter(routes)
export default  router