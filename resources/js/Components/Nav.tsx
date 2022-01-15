import React, { FC } from "react";
import Button from "./Button";
import NavLink from "./NavLink";

import { RouteProps } from "../Layouts/Template";

const Nav: FC<RouteProps> = ({ navRoutes, auth }) => {
    // let adminNav;
    // if (auth && auth.user && auth.user.admin === 1) {
    //     adminNav = navRoutes;
    // } else {
    //     adminNav = navRoutes?.filter((route) => route !== "admin-tools");
    // }
    const navButtonFactory = navRoutes?.map((route, index) => (
        <NavLink key={index} href={"/" + route} active={true}>
            <Button
                type="button"
                onClick={() => null}
                className="mr-3"
                disabled={false}
                size="m"
            >
                {route}
            </Button>
        </NavLink>
    ));

    return <div className="mt-6 mb-6">{navButtonFactory}</div>;
};

export default Nav;
