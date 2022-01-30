import React, { FC } from "react";
import ApplicationLogo from "./ApplicationLogo";
import { RouteProps } from "../Layouts/Template";
import Button from "./Button";
import { useThemeContext } from "./ThemeContext";
import NavLink from "./NavLink";
import Nav from "../Components/Nav";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const Header: FC<RouteProps> = ({ auth, title, navRoutes }) => {
    /**
     * toggle to switch CSS light / dark theme with HTML tag attributes
     * useThemeContext & button (for handle it)
     *
     */
    const { colorTheme, setColorTheme } = useThemeContext();
    return (
        <>
            <div className="fixed top-0 flex">
                <ApplicationLogo
                    className="justify-center flex-none hidden p-1 mr-1 sm:mr-3 xs:block"
                    fillColor={`var(--my-foreground)`}
                />

                <div className="flex flex-wrap sm:flex-nowrap w-fit h-20 sm:h-10 sm:w-full py-1 px-2 rounded-b-md text-[color:var(--my-background)] text-right bg-[color:var(--my-foreground)] items-center justify-center">
                    <IconContext.Provider
                        value={{ className: "w-4 h-4 ml-px text-black" }}
                    >
                        <Button
                            type="button"
                            onClick={() => setColorTheme(!colorTheme)}
                            className="flex-none w-8 h-8 mr-1 rounded-full"
                            disabled={false}
                            size="xs"
                            foregroundColor="amber-400"
                        >
                            {colorTheme ? <BsSunFill /> : <BsMoonFill />}
                        </Button>
                    </IconContext.Provider>
                    <div className="flex-none h-8 px-2 mb-2 rounded-md max-w-xxs sm:mb-0 bg-amber-400 sm:order-last">
                        <span className="flex-none inline-block text-xs text-center text-black align-middle">
                            {auth?.user?.name
                                ? `user: ${auth.user.name}
                                 `
                                : `hello visitor, You can `}
                            {!auth?.user?.name && (
                                <>
                                    <NavLink
                                        href={"/login"}
                                        method="get"
                                        className="font-extrabold text-black hover:underline"
                                    >
                                        log in
                                    </NavLink>
                                    {` or `}
                                    <NavLink
                                        href="/register"
                                        method="get"
                                        className="font-extrabold text-black hover:underline"
                                    >
                                        register
                                    </NavLink>
                                </>
                            )}
                            {auth?.user?.name && (
                                <NavLink
                                    href={"/logout"}
                                    method="post"
                                    className="font-extrabold text-black hover:underline"
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
                    />
                </div>
            </div>
        </>
    );
};

export default Header;
