import React, { ReactNode, FC } from "react";
import Header from "../Shared/Header";
import { CssDataStorePattern } from "../Pages/AdminTools/colorHelpers/manageCssStoredData";
import { InertiaLinkProps, usePage } from "@inertiajs/inertia-react";
import { Page, PageProps, PageResolver } from "@inertiajs/inertia";

export interface RouteProps {
    auth?: { user: { admin: number; name: string; email?: string } };
    errors?: object;
    navRoutes?: string[];
    header?: string;
    title?: SVGStringList;
    cssStoredData?: CssDataStorePattern[];
    props?: {
        auth?: { user: { admin: number; name: string; email?: string } };
        errors?: object;
        navRoutes?: string[];
        header?: string;
        title?: SVGStringList;
        cssStoredData?: CssDataStorePattern[];
    };

    children?: ReactNode | ReactNode[];

    classNameBtn?: string;
    classNameDiv?: string;
}

const Template = ({ children }: RouteProps) => {
    const { auth, navRoutes, title, cssStoredData } = usePage<
        Page & RouteProps
    >().props;
    return (
        <div className="">
            <Header auth={auth} title={title} navRoutes={navRoutes} />
            <div className="h-24 md:h-12"></div>
            <div className="w-9/12 p-2 mx-auto drop-shadow-md rounded-md xs:p-4 sm:p-6 bg-[color:var(--window-background)]">
                {children}
            </div>
        </div>
    );
};

export default Template;
