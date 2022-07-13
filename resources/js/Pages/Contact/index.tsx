import { Page, PageProps } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import React, { ReactNode } from "react";
import { InertiaRouteProps } from "../../Shared/Interfaces";

const Contact = () => {
    const { title} = usePage<Page & InertiaRouteProps>().props;
    return (
        <div className="justify-center bg-blue-500">this is body</div>
    );
};

export default Contact;
