import React, { FC } from "react";
import ApplicationLogo from "./ApplicationLogo";
import { RouteProps } from "../Layouts/Template";

const Header: FC<RouteProps> = ({ auth, title }) => {
    return (
        <>
            <div className="flex flex-row text-7xl">
                <ApplicationLogo
                    className=""
                    fillColor={`var(--my-foreground)`}
                />
                <div>{title}</div>
            </div>
            <div>{auth ? `hello user` : `hello unknown user`}</div>
        </>
    );
};

export default Header;
