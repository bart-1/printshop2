import React, { FC } from "react";

interface CreatorNavProps {}

const CreatorNav: FC<CreatorNavProps> = () => {
    return (
        <div className="fixed bottom-0 w-full h-6 max-w-4xl bg-red-600 hover:h-36">
            {" "}
            Creator Navigation Panel
        </div>
    );
};

export default CreatorNav;
