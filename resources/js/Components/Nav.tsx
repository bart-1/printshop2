import React, {useEffect, useState} from 'react'

function Nav() {

    const [colorTheme, setColorTheme] = useState(false);

    //switch for light/dark theme in DOM
    useEffect(() => {
        colorTheme
            ? document.documentElement.setAttribute("data-theme", "dark")
            : document.documentElement.setAttribute("data-theme", "light");
    }, [colorTheme]);
    return (
        <div>
            <button onClick={()=>setColorTheme(prevState => !prevState)}>dark/light</button>
    </div>
)
}

export default Nav;
