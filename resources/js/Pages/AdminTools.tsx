import React, { FC } from "react";
import Template, { RouteProps } from "../Layouts/Template";
import ColorAdminTools from "./AdminTools/ColorAdminTools";

const AdminTools: FC<RouteProps> = (props) => {


    return (
        <Template {...props}>
            <ColorAdminTools cssInputData={props.cssStoredData! }/>
        </Template>
    );
};

export default AdminTools;
