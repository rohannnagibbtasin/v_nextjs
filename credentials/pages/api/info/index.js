import User from '../../../model/User';

export default async function handler(req,res){
    switch(req.method){
        case "POST":
          await createUser(req, res)
          break;
      }
}
const createUser = async (req,res)=>{
    const newUser = new User(req.body);
    try{
        const r = await newUser.save();
        console.log(r)
        res.status(200).json({
            message: 'User was inserted successfully',
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            error: 'There was a server side error',
        });
    }
}