import React from "react";
import NavLink from "./NavLink";
import Search from "./Search";

interface NavSubMenuProps {
    links: { name: string }[];
    classNameProps: string;
    path: string;
}

const NavSubMenu = ({ links, classNameProps, path }: NavSubMenuProps) => {
    const categoriesList = links.map((link, index) => (
        <NavLink key={link.name + index} href={`${path}/${link.name}`}>
            {`${link.name}`}
        </NavLink>
    ));

    return <>{categoriesList}</>;
};
export default NavSubMenu;
