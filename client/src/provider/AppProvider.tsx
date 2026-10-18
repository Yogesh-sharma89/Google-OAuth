import Toaster from "../components/toaster"
import AppRouter from "../routes/AppRouter"


const AppProvider = () => {
  return (
    <>

    <AppRouter/>

    <Toaster/>
      
    </>
  )
}

export default AppProvider
