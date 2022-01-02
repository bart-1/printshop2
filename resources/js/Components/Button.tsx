import React, { MouseEventHandler, ReactNode } from "react";

export type ButtonType = {
    children?: ReactNode | ReactNode[] | undefined;
    className: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    processing: boolean;
    type: "submit" | "button" | "reset" | undefined;
};

function Button({
    children,
    className = "",
    onClick,
    processing,
    type = "button",
}: ButtonType) {
    return (
        <button
            type={type}
            className={
                `inline-flex items-center px-4 py-2 bg-[color:var(--my-foreground)] border border-transparent rounded-md font-semibold text-xs text-[color:var(--my-background)] uppercase tracking-widest active:bg-[color:var(--my-foreground)] transition ease-in-out duration-150 ${
                    processing && "opacity-25"
                } ` + className
            }
            disabled={processing}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
