import User from '../../../../model/User';
export default async function handler(req,res){
    switch(req.method){
        case "POST":
          await getUser(req, res)
          break;
      }
}

const getUser = async (req,res)=>{
    let email = req.body.email;
    let password = req.body.password;
    const m = await User.findOne({email: email, password: password});
    console.log(m);
}
