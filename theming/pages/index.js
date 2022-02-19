import {Grid , Switch} from '@mui/material';
import Content from '../components/Content';

export default function Home({setCurrentTheme, currentTheme}) {
  const themeChanger = () =>{
    setCurrentTheme(!currentTheme);
  }
  return (
    <Grid sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
     <Switch onClick={()=> themeChanger()} />
     <br />
     <Content />
    </Grid>
  )
}
