import { useSession } from "next-auth/client";
import { useEffect, useState } from "react";

export default function Secret(){
    const [session, loading] = useSession();
    const [content, setContent] = useState();

    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await fetch('/api/secret');
            const json = await res.json();

            if(json.content){
                setContent(json.content);
            }
        }
        fetchData();
    },[session]);
    if(typeof window !== 'undefined' && loading)
        return null;
    if(!session){
        return (
            <main>
                <div>
                    <h1>You arent signed please sign in first</h1>
                </div>
            </main>
        );
    }
    return (
        <main>
            <div>
                <h1>Protected page</h1>
                <p>{content}</p>
            </div>
        </main>
    );
}