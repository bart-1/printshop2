import React, { useEffect, useState } from "react";
import Button from "./Button";
function Nav() {
    const [colorTheme, setColorTheme] = useState(false);

    //switch for light/dark theme in DOM
    useEffect(() => {
        colorTheme
            ? document.documentElement.setAttribute("data-theme", "dark")
            : document.documentElement.setAttribute("data-theme", "light");
    }, [colorTheme]);
    return (
        <div>
            <Button
                type="button"
                onClick={() => setColorTheme((prevState) => !prevState)}
                className=""
                processing={false}
            >Nowy</Button>

            <button onClick={() => setColorTheme((prevState) => !prevState)}>
                dark/light
            </button>
        </div>
    );
}

export default Nav;
