const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.js",
        "./resources/js/**/*.ts",
        "./resources/js/**/*.tsx",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Raleway", ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                xxs: "0.5rem",
            },
            colors: {
                "my-light": "#a2c4c8",
                "my-dark": "#222222",
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
