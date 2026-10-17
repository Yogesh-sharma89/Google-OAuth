import app from "./app";
import ConnectToDb from "./config/db";
import envConfig from "./config/env.config";

const port = envConfig.port;

const IntializeConnection = async()=>{
    try{

        await ConnectToDb();

        app.listen(port,()=>{
            console.log("Server is listening on port :",port);
        })

    }catch(err){
       console.log("Error in intialize connection :",err);
       process.exit(1);
    }
}

export default IntializeConnection;