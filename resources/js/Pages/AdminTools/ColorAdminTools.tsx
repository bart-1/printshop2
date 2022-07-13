import React, { FC, useEffect, useState } from "react";
import {
    CssDataEditPattern,
    prepareCssColorDataToMergeAndStore,
    prepareCssColorDataToEdit,
} from "./colorHelpers/manageCssStoredColorData";
import {
    CssDataStorePattern,
    mergeCssStoredDataWithStyles,
} from "./colorHelpers/manageCssStoredData";
import ColorModifyToolHslGUI from "./ColorModifyToolHslGUI";
import { useThemeContext } from "../../Shared/ThemeContext";

interface ColorAdminToolsProps {
    cssInputData?: CssDataStorePattern[];
}

const ColorAdminTools: FC<ColorAdminToolsProps> = ({
    cssInputData,
}: ColorAdminToolsProps) => {
    const [cssDataToMerge, setCssDataToMerge] = useState<CssDataEditPattern[]>(
        []
    );
    const [editableCssData, setEditableCssData] = useState<
        CssDataEditPattern[]
    >([]);

    const { colorTheme } = useThemeContext();

    useEffect(() => {
        //PROBLEM
        mergeCssStoredDataWithStyles(
            prepareCssColorDataToMergeAndStore(cssDataToMerge),
            colorTheme
        );
    }, [cssDataToMerge]);

    useEffect(() => {
        if (cssInputData && cssInputData.length > 0)
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
