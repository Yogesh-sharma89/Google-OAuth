import { Router } from "express";
import passport from "passport";
import protectRoute from "../middleware/auth.middleware";

const authRouter = Router();

authRouter.get("/google",passport.authenticate("google",{
    scope:["profile","email"]
}))

authRouter.get("/google/callback",passport.authenticate("google",{
    failureRedirect:"/login"
}),
 (_req,res)=>{
    res.redirect("/profile")
 }
)

authRouter.get("/profile",protectRoute,(req,res)=>{

    return res.status(200).json({
        success:true,
        message:"Profile fetched successfully",
        user:req.user
    })
});

authRouter.post("/logout",protectRoute,(req,res,next)=>{

    req.logOut((err)=>{
        if(err) return next(err);

        req.session.destroy((err)=>{
            if(err) return next(err);

            res.clearCookie("connect.sid");
            res.status(200).json({
                success:true,
                message:"Logout successfully"
            })
        })
    })
})

export default authRouter;