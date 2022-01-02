import React, {useState} from "react";
import Template from "../Layouts/Template";

const Hello = () => {
    const [isAuth, setIsAuth] = useState(false);
    return (
        <Template auth={isAuth}>
            <div className="bg-blue-500 justify-center">this is body</div>

            <button onClick={()=>setIsAuth(prevState => !prevState)} className="bg-red-500 text-2xl">AUTH</button>
        </Template>
    );
};

export default Hello;
