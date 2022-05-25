import React from "react";
import { Page } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { InertiaRouteProps } from "../../Layouts/Template";
import ColorAdminTools from "./ColorAdminTools";

const AdminTools = () => {
    const { cssStoredData } = usePage<Page & InertiaRouteProps>().props;
    return (
        <>
            <ColorAdminTools cssInputData={cssStoredData} />
        </>
    );
};

export default AdminTools;
