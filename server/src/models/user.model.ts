import mongoose, { Model } from "mongoose";
import type { IUSER } from "../types/schema/user";

const userSchema = new mongoose.Schema<IUSER>({
    googleId: { type: String, required: true,index:true,unique:true },
    name: { type: String, required: true },
    email: { type: String, required: true,unique:true,index:true },
    avatar: { type: String },
},{
    timestamps:true
})


const UserModel:Model<IUSER> = mongoose.model<IUSER>("user",userSchema);

export default UserModel;