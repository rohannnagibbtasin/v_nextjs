import axios from "axios";
import { useState } from "react"
const User = {
    name:'',
    email:'',
    password:''
}
const Register = () => {
    
    const [user, setUser] = useState(User);
    const handler = (e)=>{
        setUser({...user,[e.target.name] : e.target.value})
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const r = await axios.post('/api/register',user);
            console.log(r);
        }catch(err){
            console.log(err);
        }
    }
    return (
        <>
            <form>
                Name :<input type="text" name="name" value={user.name} onChange={e=>handler(e)} /> <br />
                Email: <input type="email" name="email" value={user.email} onChange={e=>handler(e)} /> <br />
                Password: <input type="password" name="password" value={user.password} onChange={e=>handler(e)} /> <br />
            </form>
            <button type="submit" onClick={e=>handleSubmit(e)}>Submit</button>
        </>
    )
}

export default Register
