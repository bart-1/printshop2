import React, { FC } from "react";
import Template, { RouteProps } from "../../Layouts/Template";
import ColorAdminTools from "./ColorAdminTools";

const AdminTools: FC<RouteProps> = (props) => {
    return <ColorAdminTools cssInputData={props.cssStoredData!} />;
};

export default AdminTools;
