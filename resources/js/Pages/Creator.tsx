import React, { FC } from "react";
import CreatorCanvas from "../Components/Creator/CreatorCanvas";
import CreatorRightToolbox from "../Components/Creator/CreatorRightToolbox";
import CreatorLeftToolbox from "../Components/Creator/CreatorLeftToolbox";
import Template, { RouteProps } from "../Layouts/Template";

const Creator: FC<RouteProps> = (props) => {
    return (
        <Template {...props}>
            <div className="">
                <div className="flex">
                    <CreatorLeftToolbox />
                    <CreatorCanvas />
                    <CreatorRightToolbox />
                </div>
            </div>
        </Template>
    );
};

export default Creator;
