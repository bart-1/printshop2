import React, { FC } from "react";
import { RouteProps } from "../Layouts/Template";
import NavLinkButton from "./NavLinkButton";

const Nav: FC<RouteProps> = ({ navRoutes, classNameDiv, classNameBtn }) => {
    const navButtonFactory = navRoutes?.map((route, index) => (
        <NavLinkButton
            key={index}
            href={"/" + route}
            active={true}
            className={`${classNameBtn}`}
            disabled={false}
            size="s"
            dataCy={route}
        >
            {route}
        </NavLinkButton>
    ));

    return <div className={classNameDiv}>{navButtonFactory}</div>;
};

export default Nav;
