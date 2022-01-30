import * as React from "react";
import { FC } from "react";

interface CreatorCanvasProps {}

const CreatorCanvas: FC<CreatorCanvasProps> = () => {
    return (
        <div className="w-2/3 h-screen bg-amber-400">
            <canvas></canvas>
        </div>
    );
};

export default CreatorCanvas;
