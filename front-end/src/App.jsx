import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error-page";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/auth/LoginPage";
import SignUpPage from "./pages/auth/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <div>home Page</div>,
  },
  {
    path:'auth/login',
    element:<LoginPage/>
  },
  {
    path:'auth/signup',
    element:<SignUpPage/>
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
