import * as React from "react";
import { FC } from "react";

interface CreatorCanvasProps {}

const CreatorCanvas: FC<CreatorCanvasProps> = () => {
    return (
        <div className="z-10 w-full h-screen min-h-screen">
            <canvas></canvas>
        </div>
    );
};

export default CreatorCanvas;
