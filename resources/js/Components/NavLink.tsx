import React, { FC, ReactNode } from "react";
import { Link } from "@inertiajs/inertia-react";

export interface NavLinkInterface {
    href: string;
    method?: string;
    active?: boolean;
    children?: ReactNode | ReactNode[] | undefined;
    className?: string;
}

const NavLink: FC<NavLinkInterface> = ({
    href,
    active,
    children,
    method = "get",
    className,
}) => {
    return (
        <Link
            href={href}
            method={method}
            className={
                active
                    ? ""
                    : `${
                          className
                              ? `${className} transition duration-150 ease-in-out`
                              : `text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out`
                      }`
            }
        >
            {children}
        </Link>
    );
};

export default NavLink;
