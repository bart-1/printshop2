import { PageProps } from "@inertiajs/inertia";
import React, { ReactNode } from "react";
import Template, { RouteProps } from "../../Layouts/Template";

const Contact = (props: RouteProps) => {
    return (
        // <Template {...props}>
        <div className="justify-center bg-blue-500">this is body</div>
        // </Template>
    );
};

// Contact.layout = (page: ReactNode) => <Template children={page} />;

export default Contact;
