require("./bootstrap");

import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import ThemeProvider from "./Shared/ThemeContext";
import Template from "./Layouts/Template";
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
    resolve: (name) => {
        const page = require(`./Pages/${name}`).default;
        if (page.layout === undefined)
            page.layout = (page) => <Template>{page}</Template>;
        return page;
    },
    setup({ el, App, props, name }) {
        const container = document.getElementById("app");
        const root = createRoot(container);
        root.render(
            <ThemeProvider>
                <App {...props} />
            </ThemeProvider>

        );
    },
});

InertiaProgress.init({ color: "#4B5563" });
