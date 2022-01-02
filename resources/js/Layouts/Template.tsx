import React, { ReactNode, FC } from "react";
import Header from "../Components/Header";
import Nav from "../Components/Nav";

export type TemplateProps = {
    auth: boolean;
    children: ReactNode | ReactNode[];
};

const Template = ({ auth, children }: TemplateProps) => {
    return (
        <div className="container m-auto h-screen p-2">
            <Nav />
            <Header auth={auth} />
            {children}
        </div>
    );
};

export default Template;
