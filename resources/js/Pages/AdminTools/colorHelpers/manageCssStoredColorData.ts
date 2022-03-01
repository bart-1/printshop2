import { CssDataStorePattern } from "../manageCssStoredData";
import { hexaObjectToHexaString } from "./hexaObjectToHexaString";
import { hexaStringToRgbaObject } from "./hexaStringToRgbaObject";
import { hslaObjectToHexaString } from "./hslaObjectToHexaString";
import { objectHexa, objectHsla, objectRgba } from "./colorObjectsInterfaces";
import { rgbaObjectToHexaString } from "./rgbaObjectToHexaString";

export interface CssDataEditPattern {
    id?: number;
    property: string;
    theme?: string;
    value: objectRgba;
    scope: "color" | "text" | "layout";
}

export function prepareCssColorDataToEdit(
    cssStoredData: CssDataStorePattern[]
): CssDataEditPattern[] {
    const colorData = cssStoredData.filter(
        (data) => data.scope === "color"
    );
    return colorData.map((color) => ({
        id: color.id,
        property: color.property,
        value: hexaStringToRgbaObject(color.value),
        theme: color.theme,
        scope: color.scope,
    }));
}
export function prepareCssColorDataToMergeAndStore(
    cssStoredData: CssDataEditPattern[]
): CssDataStorePattern[] {
    const colorData = cssStoredData.filter(
        (data) => data.scope === "color"
    );
    return colorData.map((color) => ({
        id: color.id,
        property: color.property,
        value: convertColorValueToString(color.value),
        theme: color.theme,
        scope: color.scope,
    }));
}

function convertColorValueToString(
    colorValueEditForm: objectRgba | objectHexa | objectHsla
): string {
    if (typeof colorValueEditForm === "string") return colorValueEditForm;
    else if ("r" in colorValueEditForm) {
        return rgbaObjectToHexaString(colorValueEditForm);
    } else if ("h" in colorValueEditForm) {
        return hslaObjectToHexaString(colorValueEditForm);
    } else if ("hr" in colorValueEditForm) {
        return hexaObjectToHexaString(colorValueEditForm);
    } else {
        return "";
    }
}
