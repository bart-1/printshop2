import React, { ReactNode } from "react";
import ApplicationLogo from "../Shared/ApplicationLogo";

export default function Guest({
    children,
}: {
    children?: ReactNode | ReactNode[] | undefined;
}) {
    return (
        <div className="flex flex-col items-center min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0">
            <div>
                    <ApplicationLogo className="w-20 h-20 text-gray-500 fill-current" />
            </div>

            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
