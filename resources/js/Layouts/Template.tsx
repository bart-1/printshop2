import React, { ReactNode, FC, useEffect, useState } from "react";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
// import ThemeProvider from "../Components/ThemeContext";

export interface RouteProps {
    auth?: { user: { admin: number; name: string; email?: string } };
    children?: ReactNode | ReactNode[];
    errors?: object;
    navRoutes?: string[];
    header?: string;
    title?: SVGStringList;
}

const Template: FC<RouteProps> = ({ auth, children, navRoutes, title }) => {
    return (
        <div className="container h-screen max-w-4xl p-2 m-auto">
            <Header auth={auth} title={title} />
            <Nav navRoutes={navRoutes} auth={auth} />
            {children}
        </div>
    );
};

export default Template;
