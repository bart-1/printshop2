import React, { FC } from "react";
import Button from "./Button";
import NavLink from "./NavLink";

import { RouteProps } from "../Layouts/Template";

const Nav: FC<RouteProps> = ({ navRoutes }) => {
    const navButtonFactory = navRoutes?.map((route, index) => (
        <NavLink key={index} href={"/" + route} active={true}>
            <Button
                type="button"
                onClick={() => null}
                className="mr-3"
                processing={false}
                size="m"
            >
                {route}
            </Button>
        </NavLink>
    ));

    return <div className="mb-3">{navButtonFactory}</div>;
};

export default Nav;
