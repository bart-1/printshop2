import {
    objectHexa,
    objectHsla,
    objectRgba,
} from "./colorHelpers/colorObjectsInterfaces";

export interface CssDataStorePattern {
    id?: number;
    property: string;
    theme?: string;
    value: string;
    scope: "color" | "text" | "layout";
}
const mainHtmlElement = document.getElementsByTagName(`html`);

export function filterCssDataByActualTheme(
    cssStoredData: CssDataStorePattern[]
): CssDataStorePattern[] {
    const theme = mainHtmlElement[0].attributes[0].value;

    if (theme === "light" && cssStoredData) {
        return cssStoredData.filter((el) => el.theme !== "dark");
    } else if (theme === "dark" && cssStoredData)
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
    element: HTMLElement | null,
    cssStoredDataString: string
) {
    if (element) element.setAttribute("style", cssStoredDataString);
}

export function mergeCssStoredDataWithStyles(
    cssStoredData: CssDataStorePattern[]
) {
    const filterTheme = filterCssDataByActualTheme(cssStoredData);

    const cssString = convertCssDataToString(filterTheme);
    addCssDataStringToElementStyles(mainHtmlElement[0], cssString);
}
