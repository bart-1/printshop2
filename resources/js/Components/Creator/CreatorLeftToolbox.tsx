import * as React from "react";
import { FC } from "react";

interface CreatorLeftToolboxProps {}

const CreatorLeftToolbox: FC<CreatorLeftToolboxProps> = () => {
    return (
        <div className="absolute left-0 z-20 w-8 min-h-screen overflow-hidden bg-[color:var(--side-elements)] hover:w-72 rounded-tr-xl rounded-br-xl">
            <div className="overflow-hidden whitespace-nowrap">left panel</div>
        </div>
    );
};

export default CreatorLeftToolbox;
