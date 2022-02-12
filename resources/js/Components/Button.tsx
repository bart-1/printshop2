import React, {
    MouseEventHandler,
    ReactNode,
    useEffect,
    useState,
} from "react";
import { IconType } from "react-icons";

export type ButtonType = {
    bgColor?: string;
    children?: ReactNode | ReactNode[] | IconType | undefined;
    className?: string;
    disabled?: boolean;
    hoverColor?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    size?: "l" | "m" | "s" | "xs";
    type: "submit" | "button" | "reset" | undefined;
    txtColor?: string;
};

function Button({
    bgColor = `bg-[color:var(--btn-bg)]`,
    children,
    className = "",
    disabled,
    hoverColor = `bg-[color:var(--btn-hov)]`,
    onClick,
    size = "m",
    type = "button",
    txtColor = `text-[color:var(--btn-txt)]`,
}: ButtonType) {
    const [isPressed, setIsPressed] = useState(false);

    useEffect(() => {
        if (window.location.pathname == "/" + children) setIsPressed(true);
    }, [window.location.pathname]);
    return (
        <button
            type={type}
            className={`inline-flex items-center border-transparent rounded-md font-normal ${
                size === "xs" && "px-1.5 py-1 border text-xxs"
            } ${size === "s" && "px-2 py-1.5 border text-xs"} ${
                size === "m" && "px-4 py-2 border text-xs"
            } ${size === "l" && "px-6 py-4 border text-s"} ${
                !isPressed
                    ? `${txtColor} ${bgColor} hover:${hoverColor}`
                    : `${txtColor} ${hoverColor} hover:${bgColor}`
            } ${disabled && "opacity-25"} ${className}`}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
