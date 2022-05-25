import React, { ReactNode, FC } from "react";
import Header from "../Shared/Header";
import { CssDataStorePattern } from "../Pages/AdminTools/colorHelpers/manageCssStoredData";
import { usePage } from "@inertiajs/inertia-react";
import { Page } from "@inertiajs/inertia";

interface TemplateChildren {
    children: ReactNode | ReactNode[];
}
export interface InertiaRouteProps {
    props?: {
        auth?: { user: { admin: number; name: string; email?: string } };
        errors?: object;
        navRoutes?: string[];
        header?: string;
        title?: SVGStringList;
        cssStoredData?: CssDataStorePattern[];
        products?: {
            id: number;
            name: string;
            description: string;
            img: string;
            price: number;
            tax: number;
        }[];
    };

}
export interface ComponentsRouteProps {
    auth?: { user: { admin: number; name: string; email?: string } };
    errors?: object;
    navRoutes?: string[];
    header?: string;
    title?: SVGStringList;
    cssStoredData?: CssDataStorePattern[];
    products?: {
        id: number;
        name: string;
        description: string;
        img: string;
        price: number;
        tax: number;
    }[];

}

//TODO - search field

const Template = ({ children }: TemplateChildren) => {
    const { auth, navRoutes, title } = usePage<
        Page & InertiaRouteProps
    >().props;

    return (
        <>
            <Header auth={auth} title={title} navRoutes={navRoutes} />
            <div className="h-24 md:h-22"></div>
            <div className="flex flex-wrap gap-6 w-fit max-w-screen-lg p-2 mx-auto drop-shadow-lg rounded-md xs:p-4 sm:p-6 bg-[color:var(--window-background)] justify-center">
                {children}
            </div>
        </>
    );
};

export default Template;
