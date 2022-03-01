import React, {
    ReactNode,
    FC,
    useEffect,
    useState,
    Children,
    isValidElement,
    cloneElement,
} from "react";
import Header from "../Components/Header";
import { CssDataStorePattern } from "../Pages/AdminTools/manageCssStoredData";

export interface RouteProps {
    auth?: { user: { admin: number; name: string; email?: string } };
    children?: ReactNode | ReactNode[];
    errors?: object;
    navRoutes?: string[];
    header?: string;
    title?: SVGStringList;
    cssStoredData?: CssDataStorePattern[];

    classNameBtn?: string;
    classNameDiv?: string;
}

const Template: FC<RouteProps> = ({
    auth,
    children,
    navRoutes,
    title,
    cssStoredData,
}) => {
    // const childrenWithProps = Children.map(children, (child) => {
    //     if (isValidElement(child)) cloneElement(child, { cssStoredData });
    //     else return child;
    // });
    return (
        <div className="px-0 mx-0 xs:mx-auto">
            <Header auth={auth} title={title} navRoutes={navRoutes} />
            <div className="h-24 md:h-12"></div>
            <div className="p-2 xs:p-4 sm:p-6">{children}</div>
        </div>
    );
};

export default Template;
