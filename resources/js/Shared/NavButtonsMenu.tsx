import React from "react";
import NavLinkButton from "./NavLinkButton";

interface NavButtonsMenuProps {
    classNameBtn: string;
    classNameDiv: string;
    navRoutes?: string[];
}

const NavButtonsMenu = ({
    navRoutes,
    classNameBtn,
    classNameDiv,
}: NavButtonsMenuProps) => {
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

export default NavButtonsMenu;
