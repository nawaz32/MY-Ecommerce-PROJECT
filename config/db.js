import mongoose from "mongoose";
import Color  from "colors";


const connectDB =async ()=>{

    try{
        const conn= await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to  mongodb database ${conn.connection.host}`.bgMagenta.white);
    }
    catch (error){
      console.log(`error in mongodb ${error}`.bgRed.white);
    }
};

export default connectDB;