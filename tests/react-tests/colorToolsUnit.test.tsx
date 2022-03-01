import { hexaObjectToHexaString } from "../../resources/js/Pages/AdminTools/colorHelpers/hexaObjectToHexaString";
import { hexaStringToRgbaObject } from "../../resources/js/Pages/AdminTools/colorHelpers/hexaStringToRgbaObject";
import { hslaObjectToHexaString } from "../../resources/js/Pages/AdminTools/colorHelpers/hslaObjectToHexaString";
import { hslaObjectToRgbaObject } from "../../resources/js/Pages/AdminTools/colorHelpers/hslaObjectToRgbaObject";
import { rgbaObjectToHexaString } from "../../resources/js/Pages/AdminTools/colorHelpers/rgbaObjectToHexaString";
import { rgbaObjectToHslaObject } from "../../resources/js/Pages/AdminTools/colorHelpers/rgbaObjectToHslaObject";

const hexObjectColor = {hr: 'D0', hg: 'C3', hb: 'DF', ha: 'FF'};
const hexStringColor = "#D0C3DFFF";
const hslaObjectColor = { h: 268, s: 30, l: 82, a: 100 };
const rgbaObjectColor = { r: 208, g: 195, b: 223, a: 100 };

test("objectHexa to hex(alpha) string convertion works fine", () => {
    const result = hexaObjectToHexaString(hexObjectColor);
    expect(result).toStrictEqual(hexStringColor);
});

test("hex string to objectRgba convertion works fine", () => {
    const result = hexaStringToRgbaObject(hexStringColor);
    expect(result).toStrictEqual(rgbaObjectColor);
});

test("objectHsla to hex string convertion works fine", () => {
    const result = hslaObjectToHexaString(hslaObjectColor);
    expect(result).toStrictEqual(hexStringColor);
});

test("objectHsla to objectRgba convertion works fine", () => {
    const result = hslaObjectToRgbaObject(hslaObjectColor);
    expect(result).toStrictEqual(rgbaObjectColor);
});

test("objectRgba to hex string convertion works fine", () => {
    const result = rgbaObjectToHexaString(rgbaObjectColor);
    expect(result).toStrictEqual(hexStringColor);
});

test("check validation of parameters in hslaObjectToRgbaObject convertion", () => {
    const wrongHslaColorValues = { h: -370, s: 33, l: 33, a: 150 };
    const result = hslaObjectToRgbaObject(wrongHslaColorValues);
    const expectedHslaColorValues = hslaObjectToRgbaObject({
        h: 10,
        s: 33,
        l: 33,
        a: 100,
    });
    expect(result).toStrictEqual(expectedHslaColorValues);
});

test("objectRgba to objectHsla convertion works fine", () => {
    const result = rgbaObjectToHslaObject(rgbaObjectColor);
    expect(result).toStrictEqual(hslaObjectColor);
});
