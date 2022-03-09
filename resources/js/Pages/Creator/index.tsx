import React, { FC } from "react";
import CreatorCanvas from "./CreatorCanvas";
import CreatorRightToolbox from "./CreatorRightToolbox";
import CreatorLeftToolbox from "./CreatorLeftToolbox";
import Template, { RouteProps } from "../../Layouts/Template";

const Creator: FC<RouteProps> = (props) => {
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
