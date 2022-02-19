import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/common.module.css';
import { Grid, TextField, Button } from "@mui/material";
import { useState } from 'react';

const User = {
    'firstName' : '',
    'lastName' : '',
    'email': '',
    'password': '',
    'confirmPassword': ''
}

export default function Register() {
    const [user, setUser] = useState(User);
    const [error, setError] = useState(false);
    const config = {
        variant : 'outlined', 
        margin: 'dense',
        error: error ? true : false,
    }
    const textChanger = (e) => {
        setUser({...user, [e.target.name] : [e.target.value] })
    }
    const submitHandler = () => {
        if(!user.firstName && !user.lastName && !user.email && !user.password && !user.confirmPassword){
            setError(true);
        }
    }
    return (
        <>
            <Head>
                <title>Register</title>
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
                    <TextField label="First Name" variant="outlined"   margin="dense" value={user.firstName} name='firstName' onChange={(e)=> textChanger(e)} />
                    <TextField label="Last Name" variant="outlined"   margin="dense" value={user.lastName} name='lastName' onChange={(e)=> textChanger(e)} />
                    <TextField label="Email" variant="outlined"  margin="dense" type='email' value={user.email} name='email' onChange={(e)=> textChanger(e)} />
                    <TextField label="Password" variant="outlined"  margin="dense" type='password' value={user.password} name='password' onChange={(e)=> textChanger(e)} />
                    <TextField label="Confirm Password" variant="outlined" type='password' margin="dense" value={user.confirmPassword} name='confirmPassword' onChange={(e)=> textChanger(e)} />
                    <Button  variant="contained" onClick={submitHandler}>Register</Button>
                    <p>Already registered? <Link href="/login"><a className={styles.link}>Login</a></Link> </p>
                </div>
            </Grid>
        </>
    )
}
