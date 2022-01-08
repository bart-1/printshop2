import React, { FC } from "react";
import ApplicationLogo from "./ApplicationLogo";
import { RouteProps } from "../Layouts/Template";

const Header: FC<RouteProps> = ({ auth, title }) => {
    return (
        <>
            <div className="flex flex-row w-full p-2 rounded-md text-[color:var(--my-background)] text-right bg-[color:var(--my-foreground)] ">
                <div className="w-1/2 text-left">
                    {auth ? `hello user` : `hello unknown user`}
                </div>
                <div className="w-1/2 text-right">log in / register</div>
            </div>
            <div className="flex flex-row h-24 w-auto">
                <ApplicationLogo
                    className="flex-none h-full align-middle"
                    fillColor={`var(--my-foreground)`}
                />
                <div className="flex-auto w-96 h-full text-7xl font-black text-right ">
                    {title}
                </div>
            </div>
        </>
    );
};

export default Header;
