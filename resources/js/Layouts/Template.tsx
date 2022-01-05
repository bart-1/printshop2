import React, { ReactNode, FC, useEffect, useState } from "react";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
// import ThemeProvider from "../Components/ThemeContext";

export interface RouteProps {
    auth?: { user: string | null };
    errors?: object;
    navRoutes?: string[];
    children?: ReactNode | ReactNode[];
}

const Template: FC<RouteProps> = ({ navRoutes, auth, children }) => {

    return (
        // <ThemeProvider>
            <div className="container m-auto h-screen p-2">
                <Header auth={auth} />
                <Nav navRoutes={navRoutes} />
                {children}
            </div>
        // </ThemeProvider>
    );
};

export default Template;
