import React, {
    createContext,
    ReactElement,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

export interface ThemeContext {
    colorTheme: boolean;
    setColorTheme: (prevState: boolean) => void;
}
export const ThemeContext = createContext<ThemeContext>({
    colorTheme: false,
    setColorTheme: () => {},
});

interface ThemeProviderProps {
    children: ReactNode | ReactNode[] | ReactElement;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
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
