import React, { FC, useEffect, useState } from "react";
import {
    CssDataEditPattern,
    prepareCssColorDataToMergeAndStore,
    prepareCssColorDataToEdit,
} from "./colorHelpers/manageCssStoredColorData";
import {
    CssDataStorePattern,
    mergeCssStoredDataWithStyles,
} from "./manageCssStoredData";
import ColorModifyToolHslGUI from "./ColorModifyToolHslGUI";
import { useThemeContext } from "../../Components/ThemeContext";

interface ColorAdminToolsProps {
    cssInputData: CssDataStorePattern[];
}

const ColorAdminTools: FC<ColorAdminToolsProps> = ({cssInputData}:ColorAdminToolsProps) => {
    const [cssDataToMerge, setCssDataToMerge] = useState<CssDataEditPattern[]>(
        []
    );
    const [editableCssData, setEditableCssData] = useState<
        CssDataEditPattern[]
    >([]);

    useEffect(() => {
        mergeCssStoredDataWithStyles(
            prepareCssColorDataToMergeAndStore(cssDataToMerge)
        );
    }, [cssDataToMerge]);

    useEffect(() => {
        setEditableCssData(prepareCssColorDataToEdit(cssInputData));
    }, []);

    const colorTools = editableCssData.map((colorToEdit, index) => (
        <ColorModifyToolHslGUI
            key={index}
            inputColor={colorToEdit}
            size="m"
            outputColor={(data: CssDataEditPattern) =>
                setCssDataToMerge((prevState) => prevState.concat(data))
            }
        />
    ));
    return (
        <>
            <div className="flex flex-wrap w-screen">{colorTools}</div>
        </>
    );
};

export default ColorAdminTools;
