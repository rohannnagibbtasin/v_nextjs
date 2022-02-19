import Head from 'next/head';
import { useRouter } from 'next/router'
import { Button, Grid, TextField } from "@mui/material";
import styles from '../styles/common.module.css';

export default function Reset() {
    const router = useRouter()
    const redirect = () =>{
        router.push('/login');
    }
    return (
        <>
            <Head>
                <title>Reset</title>
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
                    <div>
                        <TextField fullWidth label='Email' margin="dense" />
                    </div>
                    <div>
                        <Button variant='outlined' onClick={()=>redirect()}>Cancel</Button>
                        <Button variant='contained' className={styles.left}>Reset</Button>
                    </div>
                </div>
            </Grid>
        </>
    )
}
