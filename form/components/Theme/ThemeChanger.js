import { MuiSwitch } from "./ThemeSwitch";

export default function ThemeChanger({ currentTheme, setCurrentTheme }) {
    return (
        <>
            <MuiSwitch onClick={()=> setCurrentTheme(!currentTheme)} />
        </>
    );
}
