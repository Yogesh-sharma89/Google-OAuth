import {toast} from "sonner"
import { FiLogOut, FiLoader } from "react-icons/fi";

import { useLogout } from "../hooks/useAuth";
import { useNavigate } from "react-router";

export default function LogoutButton() {
  
  const {mutateAsync:logout,isPending} = useLogout();

  const navigate = useNavigate();
   
  const handleLogout =async()=>{
      try{

        await toast.promise(logout(),{
            loading:"Logging out...",
            success:()=>{
                navigate("/");
                return "Logged out successfully"
            },
            error:(err)=>err.response?.data?.message || "failed to logout"
        }).unwrap()
        
      }catch(err){
         console.log("Error in logout :",err);
      }
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={isPending}
      className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {isPending ? (
        <FiLoader className="animate-spin" size={18} />
      ) : (
        <FiLogOut size={18} />
      )}

      {isPending ? "Logging out..." : "Logout"}
    </button>
  );
}
