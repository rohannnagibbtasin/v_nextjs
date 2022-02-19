import { ThemeProvider } from '@emotion/react';
import { useState } from 'react'
import ThemeChanger from '../components/Theme/ThemeChanger';
import { darkTheme, lightTheme, MuiSwitch } from '../components/Theme/ThemeSwitch';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [currentTheme, setCurrentTheme] = useState(true);
  return (
    <ThemeProvider theme={ currentTheme ? lightTheme : darkTheme }>
      <ThemeChanger currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
