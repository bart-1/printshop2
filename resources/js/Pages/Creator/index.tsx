import React from "react";
import CreatorCanvas from "./CreatorCanvas";
import CreatorRightToolbox from "./CreatorRightToolbox";
import CreatorLeftToolbox from "./CreatorLeftToolbox";
import { InertiaRouteProps } from "../../Shared/Interfaces";
import { usePage } from "@inertiajs/inertia-react";
import { Page } from "@inertiajs/inertia";

const Creator= () => {
    const { products } = usePage<Page & InertiaRouteProps>().props;
    return (
        <div className="">
            <div className="flex">
                <CreatorLeftToolbox />
                <CreatorCanvas />
                <CreatorRightToolbox />
            </div>
        </div>
    );
};

export default Creator;
