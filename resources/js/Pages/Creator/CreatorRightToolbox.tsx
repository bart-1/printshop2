import React, { FC } from "react";

interface CreatorRightTollboxProps {}

const CreatorRightToolbox: FC<CreatorRightTollboxProps> = () => {
    return (
        <div className="absolute right-0 z-20 w-8 min-h-screen bg-[color:var(--side-elements)] hover:w-72 rounded-tl-xl rounded-bl-xl">
            {" "}
            Creator Navigation Panel
        </div>
    );
};

export default CreatorRightToolbox;
