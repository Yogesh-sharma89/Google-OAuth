import { createBrowserRouter, RouterProvider } from "react-router"
import PublicRoute from "./PublicRoute"
import { lazy } from "react"
import ProtectedRoute from "./ProtectedRoute"

const AuthPage = lazy(()=>import("../pages/AuthPage"))
const HomePage = lazy(()=>import("../pages/HomePage"))

const AppRouter = () => {

   const router = createBrowserRouter([
       {
        path:"/",
        element:<PublicRoute/>,
        children:[
            {
                index:true,
                element:<AuthPage/>
            }
        ]
       },
       {
        path:"/home",
        element:<ProtectedRoute/>,
        children:[
            {
                path:"",
                index:true,
                element:<HomePage/>
            }
        ]
       }
   ])

  return (
     <RouterProvider router={router}/>
  )
}

export default AppRouter
