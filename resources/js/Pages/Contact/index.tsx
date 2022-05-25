import { Page, PageProps } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import React, { ReactNode } from "react";
import { InertiaRouteProps } from "../../Layouts/Template";

const Contact = () => {
    const { title} = usePage<Page & InertiaRouteProps>().props;
    return (
        <div className="justify-center bg-blue-500">this is body</div>
    );
};

export default Contact;
