import React, { FC } from "react";
import ApplicationLogo from "./ApplicationLogo";
import { RouteProps } from "../Layouts/Template";

const Header: FC<RouteProps> = ({ auth }) => {
    return (
        <>
            <ApplicationLogo className="" fillColor={`var(--my-foreground)`} />
            <div>{auth ? `hello user` : `hello unknown user`}</div>
        </>
    );
};

export default Header;
