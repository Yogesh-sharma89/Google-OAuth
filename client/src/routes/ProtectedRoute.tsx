import { Navigate, Outlet } from "react-router";
import { useGetProfile } from "../hooks/useAuth";
import Loader from "../components/Loader";


const ProtectedRoute = () => {

      const {data:user,isLoading} = useGetProfile();

      if(!user){
        return <Navigate to={'/'} replace/>
      }

      if(isLoading){
        return <Loader text="Loading..."/>
      }

  return (
    <>
      <Outlet/>
    </>
  )
}

export default ProtectedRoute
