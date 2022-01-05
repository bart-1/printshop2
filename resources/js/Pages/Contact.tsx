import React, { FC } from "react";
import Template, { RouteProps } from "../Layouts/Template";

const Contact:FC<RouteProps> = ({ auth, errors, navRoutes}) => {
    return (
        <Template navRoutes={navRoutes}>
            <div className="bg-blue-500 justify-center">this is body</div>
        </Template>
    );
};

export default Contact;
