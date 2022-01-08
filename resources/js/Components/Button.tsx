import React, { MouseEventHandler, ReactNode } from "react";

export type ButtonType = {
    backgroundColor?: string;
    children?: ReactNode | ReactNode[] | undefined;
    className: string;
    foregroundColor?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    processing: boolean;
    size?: "l" | "m" | "s";
    type: "submit" | "button" | "reset" | undefined;
};

function Button({
    backgroundColor,
    children,
    className = "",
    foregroundColor,
    onClick,
    processing,
    size = "m",
    type = "button",
}: ButtonType) {
    return (
        <button
            type={type}
            className={`inline-flex items-center border-transparent rounded-md font-semibold uppercase tracking-widest ${
                size === "s" && "px-2 py-1 border-2 text-xxs"
            } ${size === "m" && "px-4 py-2 border-2 text-xs"} ${
                size === "l" && "px-6 py-4 border-2 text-s"
            } ${
                backgroundColor
                    ? `text-${backgroundColor} hover:bg-${backgroundColor} `
                    : `text-[color:var(--my-background)] hover:bg-[color:var(--my-background)] `
            } ${
                foregroundColor
                    ? `bg-${foregroundColor} hover:border-${foregroundColor} hover:text-${foregroundColor} `
                    : `bg-[color:var(--my-foreground)] hover:border-[color:var(--my-foreground)] hover:text-[color:var(--my-foreground)] `
            }     ${processing && "opacity-25"} ${className}`}
            disabled={processing}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
