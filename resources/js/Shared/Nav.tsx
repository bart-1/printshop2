import React, { FC } from "react";
import { ComponentsRouteProps } from "../Layouts/Template";
import NavLinkButton from "./NavLinkButton";

interface NavProps extends ComponentsRouteProps {
    classNameBtn: string;
    classNameDiv: string;
}

const Nav = ({ navRoutes, classNameBtn, classNameDiv }: NavProps) => {
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
