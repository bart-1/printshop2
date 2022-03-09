import React, { FC, useState } from "react";
import Template, { RouteProps } from "../../Layouts/Template";

const Start: FC<RouteProps> = (props) => {
    const [isAuth, setIsAuth] = useState(false);
    return (
        <>
            <div className="justify-center bg-blue-500">this is body</div>

            <button
                onClick={() => setIsAuth((prevState) => !prevState)}
                className="text-2xl bg-red-500"
            >
                AUTH
            </button>
        </>
    );
};

export default Start;
