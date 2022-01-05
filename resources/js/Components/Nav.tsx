import React, { FC, useEffect, useState } from "react";
import Button from "./Button";
import NavLink from "./NavLink";

import { RouteProps } from "../Layouts/Template";

const Nav: FC<RouteProps> = ({ navRoutes }) => {
    /**
     * switch CSS light / dark theme with HTML tag attributes
     */
    const [colorTheme, setColorTheme] = useState(false);

    useEffect(() => {
        colorTheme
            ? document.documentElement.setAttribute("data-theme", "dark")
            : document.documentElement.setAttribute("data-theme", "light");
    }, [colorTheme]);

    const navButtonFactory = navRoutes?.map((route, index) => (
        <NavLink key={index} href={"/" + route} active={true}>
            <Button
                type="button"
                onClick={() => null}
                className=""
                processing={false}
            >
                {route}
            </Button>
        </NavLink>
    ));

    return (
        <div>
            <Button
                type="button"
                onClick={() => setColorTheme((prevState) => !prevState)}
                className="mr-5"
                processing={false}
            >
                {colorTheme ? "light" : "dark"}
            </Button>
            {navButtonFactory}
        </div>
    );
};

export default Nav;
