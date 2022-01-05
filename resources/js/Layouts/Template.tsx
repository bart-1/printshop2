import React, { ReactNode, FC, useEffect, useState } from "react";
import Header from "../Components/Header";
import Nav from "../Components/Nav";

export interface RouteProps {
    auth?: { user: string | null };
    errors?: object;
    navRoutes?: string[];
    children?: ReactNode | ReactNode[];
}

const Template: FC<RouteProps> = ({ navRoutes, auth, children }) => {

    const [colorTheme, setColorTheme] = useState(false);

    useEffect(() => {
        colorTheme
            ? document.documentElement.setAttribute("data-theme", "dark")
            : document.documentElement.setAttribute("data-theme", "light");
    }, [colorTheme]);

    return (
        <div className="container m-auto h-screen p-2">
            <Header auth={auth} />
            <Nav navRoutes={navRoutes} />
            {children}
        </div>
    );
};

export default Template;
