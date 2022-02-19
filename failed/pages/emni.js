import axios from 'axios'
import React, { useEffect } from 'react'

const Emni = () => {
    let user = {
        "email":"rntasin@gmail.com",
        "password":"tasinnodi"
    }
    useEffect(()=>{
        async function a (){
            const res = await axios.post('/api/login',user);
            console.log(res.data);
        }
        a()
    })
    return (
        <div>
            nothing

        </div>
    )
}

export default Emni
