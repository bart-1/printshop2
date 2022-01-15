import React, { FC, useEffect } from "react";
import Template, { RouteProps } from "../Layouts/Template";

const AdminTools: FC<RouteProps> = (props) => {

    return (
        <Template {...props}>
            <div className="justify-center bg-blue-500">this is body ADM</div>
        </Template>
    );
};

export default AdminTools;
