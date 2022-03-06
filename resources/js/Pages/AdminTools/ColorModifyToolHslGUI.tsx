import React, { FC, useEffect, useState } from "react";
import InputRangeAndNumber from "../../Shared/InputRangeAndNumber";
import { hslaObjectToRgbaObject } from "./colorHelpers/hslaObjectToRgbaObject";
import { rgbaObjectToHslaObject } from "./colorHelpers/rgbaObjectToHslaObject";
import { CssDataEditPattern } from "./colorHelpers/manageCssStoredColorData";

interface ColorModifyToolHslGUIProps {
    size?: "m" | "s" | "l";
    inputColor: CssDataEditPattern;
    outputColor: CallableFunction;
}

const ColorModifyToolHslGUI: FC<ColorModifyToolHslGUIProps> = ({
    size = "m",
    inputColor,
    outputColor,
}) => {
    const [h, setH] = useState(0);
    const [s, setS] = useState(100);
    const [l, setL] = useState(50);
    const [a, setA] = useState(100);

    const [cssDataToStore, setCssDataToStore] = useState<CssDataEditPattern>({
        id: inputColor.id,
        property: inputColor.property,
        theme: inputColor.theme,
        value: inputColor.value,
        scope: inputColor.scope,
    });

    useEffect(() => {
        const hslaColor = rgbaObjectToHslaObject(inputColor.value);

        setH(hslaColor.h);
        setS(hslaColor.s);
        setL(hslaColor.l);
        setA(hslaColor.a);
    }, []);

    useEffect(() => {
        setCssDataToStore({
            id: inputColor.id,
            property: inputColor.property,
            theme: inputColor.theme,
            value: hslaObjectToRgbaObject({ h: h, s: s, l: l, a: a }),
            scope: inputColor.scope,
        });
    }, [h, s, l, a]);
    useEffect(() => {
        outputColor(cssDataToStore);
    }, [cssDataToStore]);

    const inputs = [
        { name: "hue", value: h, min: 0, max: 360, inputChange: setH },
        {
            name: "saturation",
            value: s,
            min: 0,
            max: 100,
            inputChange: setS,
        },
        { name: "lightness ", value: l, min: 0, max: 100, inputChange: setL },
        {
            name: "transparency ",
            value: a,
            min: 0,
            max: 100,
            inputChange: setA,
        },
    ];

    return (
        <>
            <div className="">
                <InputRangeAndNumber
                    inputsParam={inputs}
                    title={inputColor.property}
                    size={size}
                />
            </div>
        </>
    );
};

export default ColorModifyToolHslGUI;
