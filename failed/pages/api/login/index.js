import connectDB from '../../../config/connectDB';
import User from '../../../models/user'
connectDB();
export default async function login(req,res){
    if (req.method === 'POST') {
        const {csrfToken,email,password} = req.body;
        const t = await User.findOne({email: email, password: password}).select('_id name email __v');
        res.status(200).json(t);
    }
}