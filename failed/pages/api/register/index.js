import connectDB from "../../../config/connectDB";
import User from '../../../models/user'
connectDB();
export default async function handler(req, res){
    if (req.method === 'POST') {
        const n = new User(req.body);
        try{
            await n.save();
            res.status(200).json({
                message: "User created successfully"
            })
        }catch(err){
            console.log(err);
            res.status(500).json({
                message: "There was a server side error"
            })
        }
    }
    
}