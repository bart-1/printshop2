import React, { ReactNode, FC } from "react";
import Header from "../Components/Header";

type TemplateProps = {
    auth: boolean;
    children: ReactNode | ReactNode[];
};

const Template = ({ auth, children }: TemplateProps) => {
    return (
        <>
            <Header auth={ auth}/>
            {children}
        </>
    );
};

export default Template;
