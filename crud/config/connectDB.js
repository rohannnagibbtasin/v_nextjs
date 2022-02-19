import mongoose from "mongoose";

const connectDB = () => {
    if(mongoose.connections[0].readyState){
        return;
    }
    mongoose.connect(process.env.DATABASE_URL, {}, err=>{
        if(err) throw err;
    });
}

export default connectDB;
