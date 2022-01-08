import React, { FC } from "react";
import ApplicationLogo from "./ApplicationLogo";
import { RouteProps } from "../Layouts/Template";
import Button from "./Button";
import { useThemeContext } from "./ThemeContext";

const Header: FC<RouteProps> = ({ auth, title }) => {
    /**
     * toggle to switch CSS light / dark theme with HTML tag attributes
     * useThemeContext & button (for handle it)
     *
     */
    const { colorTheme, setColorTheme } = useThemeContext();
    return (
        <>
            <div className="flex flex-row w-full p-2 rounded-md text-[color:var(--my-background)] text-right bg-[color:var(--my-foreground)] ">
                <Button
                    type="button"
                    onClick={() => setColorTheme(!colorTheme)}
                    className="mr-8 rounded-full"
                    disabled={false}
                    size="s"
                    revertColor
                >
                    {colorTheme ? "light" : "dark"}
                </Button>
                <div className="w-1/2 text-left">
                    {auth ? `hello user` : `hello unknown user`}
                </div>
                <div className="w-1/2 text-right">log in / register</div>
            </div>
            <div className="flex flex-row w-auto h-24">
                <ApplicationLogo
                    className="flex-none h-full align-middle"
                    fillColor={`var(--my-foreground)`}
                    yourLogoLink="img/favicon.svg"
                />
                <div className="flex-auto h-full font-black text-right w-96 text-7xl ">
                    {title}
                </div>
            </div>
        </>
    );
};

export default Header;
