import React, { useEffect, useRef } from "react";

export type InputType = {
    autoComplete?: string | undefined;
    className: string;
    handleChange: CallableFunction;
    isFocused?: boolean;
    name: string;
    required?: boolean;
    type: string;
    value: string;
};

function Input({
    autoComplete,
    className,
    handleChange,
    isFocused,
    name,
    required,
    type = "text",
    value,
}: InputType) {
    const input = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isFocused && input.current) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                data-cy={name}
                id={`input-${name}`}
                type={type}
                name={name}
                value={value}
                className={
                    `border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm ` +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
}

export default Input;
