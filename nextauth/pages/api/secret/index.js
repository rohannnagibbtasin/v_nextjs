import { getSession } from "next-auth/client";
const b =  async (req,res) => {
    const session = await getSession({req})

    if(session){
        res.send({
            content: 'Welcome to secret page'
        });
    }else{
        res.sen({
            error: 'You need to be signed in '
        })
    }
}
export default b;