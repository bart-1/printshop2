import React, { FC, PropsWithChildren } from "react";
import Authenticated from "../Layouts/Authenticated";
import { RouteProps } from "../Layouts/Template";

const Dashboard: FC<RouteProps> = ({ auth, errors }) => {
    return (
        <Authenticated
            auth={auth}
            errors={errors}
            // header={
            //     <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            //         Dashboard
            //     </h2>
            // }
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Dashboard;
