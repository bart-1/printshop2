import React, { FC } from "react";
import CreatorCanvas from "../Components/Creator/CreatorCanvas";
import CreatorNav from "../Components/Creator/CreatorNav";
import CreatorMainToolbox from "../Components/Creator/CreatorMainToolbox";
import Template, { RouteProps } from "../Layouts/Template";

const Creator: FC<RouteProps> = (props) => {
    return (
        <Template {...props}>
            <div className="container bg-blue-500 ">
                <div className="flex">
                    <CreatorMainToolbox />
                    <CreatorCanvas />
                    <CreatorNav />
                </div>
            </div>
        </Template>
    );
};

export default Creator;
