import React, { FC, useEffect, useState } from "react";
import Button from "./Button";
import NavLink from "./NavLink";

import { RouteProps } from "../Layouts/Template";
import { useThemeContext } from "./ThemeContext";

const Nav: FC<RouteProps> = ({ navRoutes }) => {
    /**
     * switch CSS light / dark theme with HTML tag attributes
     */
    // const [colorTheme, setColorTheme] = useState(false);

    // useEffect(() => {
    //     colorTheme
    //         ? document.documentElement.setAttribute("data-theme", "dark")
    //         : document.documentElement.setAttribute("data-theme", "light");
    // }, [colorTheme]);

    const { colorTheme, setColorTheme } = useThemeContext();

    const navButtonFactory = navRoutes?.map((route, index) => (
        <NavLink key={index} href={"/" + route} active={true}>
            <Button
                type="button"
                onClick={() => null}
                className="mr-3"
                processing={false}
                size="m"
            >
                {route}
            </Button>
        </NavLink>
    ));

    return (
        <div className="mb-3">
            <Button
                type="button"
                onClick={() => setColorTheme(!colorTheme)}
                className="mr-8 rounded-full"
                processing={false}
                size="s"
            >
                {colorTheme ? "light" : "dark"}
            </Button>
            {navButtonFactory}
        </div>
    );
};

export default Nav;
