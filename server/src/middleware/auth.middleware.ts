import type { NextFunction,Response } from "express"

const protectRoute = async(req:any,res:Response,next:NextFunction)=>{

    try{

      if(!req.isAuthenticated()){
        return res.status(401).json({
            success:false,
            message:"Unauthenticated"
        })
      }

      return next();

    }catch(err){
       return res.status(500).json({
        success:false,
        message:"Failed to verify authentication"
       })
    }
}

export default protectRoute;