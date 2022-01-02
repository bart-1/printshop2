import React, {FC} from 'react'

interface HeaderProps {
    props?: {};
    auth: boolean;
}

const Header: FC<HeaderProps> = ({ auth }) => {
    return (
        <>
            <div>LOGO</div>
            <div>{ auth ? `hello user`: `hello unknown user`}</div>
        </>
     );
}

export default Header;
