import api from "../lib/api"

interface User {
  _id: string;
  name: string;
  email: string;
  avatar?: string;
}


export const getProfile = async()=>{
    try{
        
        const res = await api.get("/profile");

        return res.data.user as User;
    }catch(err){
      console.log("Error in get user profile :",err);
       throw err;
    }
}


export const logout = async()=>{
    try{
        
        const res = await api.post("/logout");
        return res.data;
    }catch(err){
      console.log("Error in logout api :",err);
      throw err;
    }
}