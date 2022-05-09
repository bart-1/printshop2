import { Theme, ThemeContext } from "../../../Shared/ThemeContext";
import {
    objectHexa,
    objectHsla,
    objectRgba,
} from "./colorObjectsInterfaces";

export interface CssDataStorePattern {
    id?: number;
    property: string;
    theme?: string;
    value: string;
    scope: "color" | "text" | "layout";
}
const mainHtmlElement = document.getElementsByTagName(`html`);
const theme = mainHtmlElement[0].attributes[0].value;
const themeDataSetElement = document.querySelectorAll(`[data-theme=${theme}]`)

export function filterCssDataByActualTheme(
    cssStoredData: CssDataStorePattern[], colorTheme:Theme
): CssDataStorePattern[] {

    if (colorTheme === "light" && cssStoredData) {
        return cssStoredData.filter((el) => el.theme !== "dark");
    } else if (colorTheme === "dark" && cssStoredData)
        return cssStoredData.filter((el) => el.theme !== "light");
    else {
        return cssStoredData;
    }
}

export function convertCssDataToString(
    cssStoredData: CssDataStorePattern[]
): string {
    let cssStoredDataString = "";
    cssStoredData.forEach((el) => {
        cssStoredDataString += `${el.property}: ${el.value}; `;
    });
    return cssStoredDataString;
}

export function addCssDataStringToElementStyles(
    element: Element | null,
    cssStoredDataString: string
) {
    if (element) element.setAttribute("style", cssStoredDataString);
}

export function mergeCssStoredDataWithStyles(
    cssStoredData: CssDataStorePattern[], colorTheme: Theme
) {
    const filterTheme = filterCssDataByActualTheme(cssStoredData, colorTheme);

    const cssString = convertCssDataToString(filterTheme);
    addCssDataStringToElementStyles(themeDataSetElement[0], cssString);
}
