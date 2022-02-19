import mongoose from 'mongoose';

mongoose.connect(process.env.DATABASE_URL, {}, err=>{
    if(err) throw err;
});