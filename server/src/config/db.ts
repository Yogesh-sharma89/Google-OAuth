import mongoose from "mongoose";
import envConfig from "./env.config";

const dbUrl = envConfig.dbUrl;

const ConnectToDb = async()=>{
    try{

        if(!dbUrl){
            throw new Error("Db connection credentials are missing")
        }

        await mongoose.connect(dbUrl);

        console.log("MongoDB connected successfully")

    }catch(err){
      console.log("Error in connecting to db  :",err);
    }
}

export default ConnectToDb;