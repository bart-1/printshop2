import React, { FC } from "react";
import Template, { RouteProps } from "../../Layouts/Template";

const Printshop: FC<RouteProps> = (props) => {
    return (
        <Template {...props}>
            <div className="justify-center bg-blue-500">this is body</div>
        </Template>
    );
};

export default Printshop;
