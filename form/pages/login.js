import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/common.module.css';
import { Grid, TextField, Button } from "@mui/material";
import { useState } from 'react';

const User = {
    'email': '',
    password: ''
}

export default function Login() {
    const [user, setUser] = useState(User);
    const textChanger = (e) => {
        setUser({...user, [e.target.name] : [e.target.value] })
    }
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <Grid sx={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center', 
                bgcolor: 'background.default',
                color: 'text.primary',
                height: '100vh', 
            }}>
                <div className={styles.flex}>
                    <TextField label="Email" variant="outlined"   margin="dense" type='email' name="email" value={user.email} onChange={(e)=> textChanger(e)} />
                    <TextField label="Password" variant="outlined"  margin="dense" type='password' name='password' value={user.password} onChange={(e)=> textChanger(e)} />
                    <Link href="/reset"><a className={styles.forgot}>Forgot password</a></Link>
                    <Button  variant="contained">Login</Button>
                    <p>Not registered yet? <Link href="/register"><a className={styles.link}>Signup</a></Link> </p>
                </div>
            </Grid>
        </>
    )
}
