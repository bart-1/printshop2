import React, { MouseEventHandler, ReactNode } from "react";

export type ButtonType = {
    backgroundColor?: string;
    children?: ReactNode | ReactNode[] | undefined;
    className?: string;
    disabled?: boolean;
    foregroundColor?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    revertColor?: boolean;
    size?: "l" | "m" | "s";
    type: "submit" | "button" | "reset" | undefined;
};

function Button({
    backgroundColor,
    children,
    className = "",
    disabled,
    foregroundColor,
    onClick,
    revertColor,
    size = "m",
    type = "button",
}: ButtonType) {
    let pressed;
    const currentURL = window.location.pathname;
    if (currentURL == "/" + children) pressed = true;
    return (
        <button
            type={type}
            className={`inline-flex items-center border-transparent rounded-md font-semibold uppercase tracking-widest ${
                size === "s" && "px-2 py-1 border-2 text-xxs"
            } ${size === "m" && "px-4 py-2 border-2 text-xs"} ${
                size === "l" && "px-6 py-4 border-2 text-s"
            } ${
                !pressed
                    ? ` ${
                          !revertColor
                              ? `${
                                    backgroundColor
                                        ? `text-${backgroundColor} hover:bg-${backgroundColor} `
                                        : `text-[color:var(--my-background)] hover:bg-[color:var(--my-background)]  `
                                } ${
                                    foregroundColor
                                        ? `bg-${foregroundColor} hover:border-${foregroundColor} hover:text-${foregroundColor} `
                                        : `bg-[color:var(--my-foreground)] hover:border-[color:var(--my-foreground)] hover:text-[color:var(--my-foreground)] `
                                }`
                              : `${
                                    foregroundColor
                                        ? `text-${foregroundColor} hover:bg-${foregroundColor} `
                                        : `text-[color:var(--my-foreground)] hover:bg-[color:var(--my-foreground)] `
                                } ${
                                    backgroundColor
                                        ? `bg-${backgroundColor} hover:border-${backgroundColor} hover:text-${backgroundColor} `
                                        : `bg-[color:var(--my-background)] hover:border-[color:var(--my-background)] hover:text-[color:var(--my-background)] `
                                }`
                      }`
                    : `${
                          !revertColor
                              ? `${
                                    backgroundColor
                                        ? `text-${backgroundColor} bg-${backgroundColor} `
                                        : `text-[color:var(--my-background)] bg-[color:var(--my-background)]  `
                                } ${
                                    foregroundColor
                                        ? `bg-${foregroundColor} border-${foregroundColor} text-${foregroundColor} `
                                        : `bg-[color:var(--my-foreground)] border-[color:var(--my-foreground)] text-[color:var(--my-foreground)] `
                                }`
                              : `${
                                    foregroundColor
                                        ? `text-${foregroundColor} bg-${foregroundColor} `
                                        : `text-[color:var(--my-foreground)] bg-[color:var(--my-foreground)] `
                                } ${
                                    backgroundColor
                                        ? `bg-${backgroundColor} border-${backgroundColor} text-${backgroundColor} `
                                        : `bg-[color:var(--my-background)] border-[color:var(--my-background)] text-[color:var(--my-background)] `
                                }`
                      }`
            }    ${disabled && "opacity-25"} ${className}`}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
