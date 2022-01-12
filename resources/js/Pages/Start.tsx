import { InertiaLinkProps } from "@inertiajs/inertia-react";
import React, { FC, useState } from "react";
import Template, { RouteProps } from "../Layouts/Template";

const Start: FC<RouteProps> = (props) => {
    const [isAuth, setIsAuth] = useState(false);
    return (
        <Template {...props}>
            <div className="bg-blue-500 justify-center">this is body</div>

            <button
                onClick={() => setIsAuth((prevState) => !prevState)}
                className="bg-red-500 text-2xl"
            >
                AUTH
            </button>
        </Template>
    );
};

export default Start;
