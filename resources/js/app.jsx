require("./bootstrap");

import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import ThemeProvider from "./Shared/ThemeContext";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Printshop2";

let theme = "light";
if (theme === "light")
    document.documentElement.setAttribute("data-theme", "light");
else if (theme === "dark")
    document.documentElement.setAttribute("data-theme", "dark");

document.documentElement.setAttribute("style", "");

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}`),
    setup({ el, App, props, name }) {
        return render(
            <ThemeProvider>
                <App {...props} />
            </ThemeProvider>,
            el
        );
    },
});

InertiaProgress.init({ color: "#4B5563" });
