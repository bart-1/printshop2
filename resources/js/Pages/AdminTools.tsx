import React, { FC } from "react";
import Template, { RouteProps } from "../Layouts/Template";

const AdminTools: FC<RouteProps> = ({ navRoutes, title }) => {
    return (
        <Template navRoutes={navRoutes} title={title}>
            <div className="justify-center bg-blue-500">this is body ADM</div>
        </Template>
    );
};

export default AdminTools;
