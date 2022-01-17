import React, { FC, ReactNode } from "react";
import { Link } from "@inertiajs/inertia-react";

export interface NavLinkInterface {
    href: string;
    method?: string;
    active?: boolean;
    children?: ReactNode | ReactNode[] | undefined;
}

const NavLink: FC<NavLinkInterface> = ({
    href,
    active,
    children,
    method = "get",
}) => {
    return (
        <Link
            href={href}
            method={method}
            className={
                active
                    ? ""
                    : "text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
            }
        >
            {children}
        </Link>
    );
};

export default NavLink;
