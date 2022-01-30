import React, { ReactNode, FC, useEffect, useState } from "react";
import Header from "../Components/Header";
// import ThemeProvider from "../Components/ThemeContext";

export interface RouteProps {
    auth?: { user: { admin: number; name: string; email?: string } };
    children?: ReactNode | ReactNode[];
    errors?: object;
    navRoutes?: string[];
    header?: string;
    title?: SVGStringList;
    classNameBtn?: string;
    classNameDiv?: string;
}

const Template: FC<RouteProps> = ({ auth, children, navRoutes, title }) => {
    return (
        <div className="px-0 mx-0 xs:mx-auto">
            <Header auth={auth} title={title} navRoutes={navRoutes} />
            <div className="h-24 sm:h-16"></div>
            <div className="p-2 xs:p-4 sm:p-6">{children}</div>
        </div>
    );
};

export default Template;
