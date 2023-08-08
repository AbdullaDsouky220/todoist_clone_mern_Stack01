
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import ErrorPage from './pages/error-page'
import Homepage from './pages/Homepage'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Homepage/>,
    errorElement:<ErrorPage/>
  },
  {
    path:'/home',
    element:<div>home Page</div>
  },

])
function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
