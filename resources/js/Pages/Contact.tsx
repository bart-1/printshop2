import React, { useState } from "react";
import Template from "../Layouts/Template";

const Contact = () => {
    const [isAuth, setIsAuth] = useState(false);
    return (
        <Template auth={isAuth}>
            <div className="bg-blue-500 justify-center">this is body</div>
        </Template>
    );
};

export default Contact;
