import React, { ReactNode } from "react";
import Header from "../Shared/Header";

interface TemplateChildren {
    children: ReactNode | ReactNode[];
}

const Template = ({ children }: TemplateChildren) => {
    return (
        <>
            <Header />
            <div className="h-24 md:h-22"></div>
            <div className="flex flex-wrap justify-center max-w-screen-lg gap-6 p-2 mx-auto xs:p-4 sm:p-6">
                {children}
            </div>
        </>
    );
};
export default Template;
