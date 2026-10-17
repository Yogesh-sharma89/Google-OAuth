import type { Document } from "mongoose";

export interface IUSER extends Document{
    googleId:string,
    name:string,
    email:string,
    avatar:string
}