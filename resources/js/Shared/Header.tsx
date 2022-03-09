import React, { FC } from "react";
import ApplicationLogo from "./ApplicationLogo";
import { RouteProps } from "../Layouts/Template";
import Button from "./Button";
import { useThemeContext } from "./ThemeContext";
import NavLink from "./NavLink";
import Nav from "./Nav";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const Header = ({ auth, title, navRoutes }:RouteProps) => {
    const { colorTheme, setColorTheme } = useThemeContext();
    return (
        <>
            <div className="fixed top-0 z-40 flex w-full">
                <ApplicationLogo
                    className="justify-center hidden w-24 p-1 grow-0 xs:block right-2"
                    fillColor={`var(--text-dark)`}
                />

                <div className="flex flex-wrap md:flex-nowrap h-20 md:h-10 sm:w-full py-1 px-2 rounded-b-md text-[color:var(--text-dark)] text-right bg-[color:var(--side-elements)] items-center justify-center grow">
                    <IconContext.Provider
                        value={{
                            className:
                                "w-4 h-4 ml-px text-[color:var(--text-dark)] ",
                        }}
                    >
                        <Button
                            type="button"
                            onClick={() => setColorTheme(colorTheme === 'dark' ? 'light' : 'dark')}
                            className="flex-none w-8 h-8 mr-5 rounded-full"
                            disabled={false}
                            size="xs"
                            txtColor="amber-400"
                        >
                            {colorTheme ? <BsSunFill /> : <BsMoonFill />}
                        </Button>
                    </IconContext.Provider>
                    <div className="flex-none h-8 px-2 mb-2 rounded-md max-w-xxs md:mb-0 text-[color:var(--btn-hov)]  md:order-last">
                        <span className="flex-none inline-block text-xs text-center text-[color:var(--text-dark)] align-middle">
                            {auth?.user?.name
                                ? `user: ${auth.user.name}
                                 `
                                : `hello visitor, You can `}
                            {!auth?.user?.name && (
                                <>
                                    <NavLink
                                        href={"/login"}
                                        method="get"
                                        className="font-extrabold text-[color:var(--text-dark)] hover:underline"
                                    >
                                        log in
                                    </NavLink>
                                    {` or `}
                                    <NavLink
                                        href="/register"
                                        method="get"
                                        className="font-extrabold text-[color:var(--text-dark)] hover:underline"
                                    >
                                        register
                                    </NavLink>
                                </>
                            )}
                            {auth?.user?.name && (
                                <NavLink
                                    href={"/logout"}
                                    method="post"
                                    className="font-extrabold text-[color:var(--text-dark)] hover:underline"
                                >
                                    logout
                                </NavLink>
                            )}
                        </span>
                    </div>
                    <Nav
                        navRoutes={navRoutes}
                        auth={auth}
                        classNameDiv="mr-2 whitespace-nowrap"
                        classNameBtn="mr-2"
                    />
                </div>
                <ApplicationLogo
                    className="justify-center hidden w-24 p-1 xs:block xs:invisible grow-0 left-2"
                    fillColor={`var(--text-dark)`}
                />
            </div>
        </>
    );
};

export default Header;
