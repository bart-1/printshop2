import React, {
    createContext,
    FC,
    ReactElement,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

export interface ThemesContextI {
    colorTheme: boolean;
    setColorTheme: (prevState: boolean) => void;
}
export const ThemeContext = createContext<ThemesContextI>({
    colorTheme: false,
    setColorTheme: () => {},
});

const ThemeProvider = ({children}: {children: ReactNode | ReactNode[] | ReactElement}) => {
    const [colorTheme, setColorTheme] = useState(false);

    useEffect(() => {
        colorTheme
            ? document.documentElement.setAttribute("data-theme", "dark")
            : document.documentElement.setAttribute("data-theme", "light");
    }, [colorTheme]);

    return (
        <ThemeContext.Provider value={{ colorTheme, setColorTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeProvider;
