import '../styles/globals.css';
import { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function MyApp({ Component, pageProps }) {
  const [currentTheme, setCurrentTheme] = useState(true);
  return (
    <ThemeProvider theme= { currentTheme ? lightTheme : darkTheme }>
      <Component {...pageProps} setCurrentTheme={setCurrentTheme} currentTheme={currentTheme} />
    </ThemeProvider> 
  );
}

export default MyApp
