import React, { FC } from "react";
import Button from "./Button";
import NavLink from "./NavLink";

import { RouteProps } from "../Layouts/Template";

const Nav: FC<RouteProps> = ({ navRoutes, classNameDiv, classNameBtn }) => {
    const navButtonFactory = navRoutes?.map((route, index) => (
        <NavLink key={index} href={"/" + route} active={true}>
            <Button
                type="button"
                onClick={() => null}
                className={`${classNameBtn}`}
                disabled={false}
                size="s"
                dataCy={route}
            >
                {route}
            </Button>
        </NavLink>
    ));

    return <div className={classNameDiv}>{navButtonFactory}</div>;
};

export default Nav;
