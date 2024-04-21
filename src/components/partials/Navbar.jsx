import React from "react";
import {Link as ScrollLink} from "react-scroll";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import Image from "next/image";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";

function NavList({closeNav}) {

    return (
        <ul
            className={
                "my-2 " +
                "flex " +
                "flex-col " +
                "gap-2 " +
                "lg:mb-0 " +
                "lg:mt-0 " +
                "lg:flex-row " +
                "lg:items-center " +
                "lg:gap-6"
            }
        >

            <Typography
                as={"li"}
                variant={"small"}
                color={"blue-gray"}
                className={
                    "p-1 " +
                    "font-medium"
                }
            >

                <ScrollLink href={"#home"}
                            to={"home"}
                            smooth={true}
                            duration={500}
                            offset={-80}
                            onClick={closeNav}
                            className={
                                "flex " +
                                "items-center " +
                                "hover:text-[#5DB3B6] " +
                                "transition-colors " +
                                "text-white " +
                                "font-bold"
                            }
                >
                    Accueil
                </ScrollLink>

            </Typography>

            <Typography
                as={"li"}
                variant={"small"}
                color={"blue-gray"}
                className={
                    "p-1 " +
                    "font-medium"
                }
            >

                <ScrollLink href={"#about"}
                            to={"about"}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            onClick={closeNav}
                            className={
                                "cursor-pointer " +
                                "flex items-center " +
                                "hover:text-[#5DB3B6] " +
                                "transition-colors " +
                                "text-white " +
                                "font-bold"
                            }
                >
                    À propos
                </ScrollLink>

            </Typography>

            <Typography
                as={"li"}
                variant={"small"}
                color={"blue-gray"}
                className={
                    "p-1 " +
                    "font-medium"
                }
            >

                <ScrollLink href={"#activities"}
                            to={"activities"}
                            smooth={true}
                            duration={500}
                            offset={-100}
                            onClick={closeNav}
                            className={
                                "cursor-pointer " +
                                "flex items-center " +
                                "hover:text-[#5DB3B6] " +
                                "transition-colors " +
                                "text-white " +
                                "font-bold"
                            }
                >
                    Les activités
                </ScrollLink>

            </Typography>

            <Typography
                as={"li"}
                variant={"small"}
                color={"blue-gray"}
                className={
                    "p-1 " +
                    "font-medium"
                }
            >

                <ScrollLink href={"#contact"}
                            to={"contact"}
                            smooth={true}
                            duration={500}
                            offset={-100}
                            onClick={closeNav}
                            className={
                                "cursor-pointer " +
                                "flex items-center " +
                                "hover:text-[#5DB3B6] " +
                                "transition-colors text-white font-bold"
                            }
                >
                    Contact
                </ScrollLink>

            </Typography>

        </ul>
    );
}

export function NavbarSimple() {
    const [openNav, setOpenNav] = React.useState(false);

    const closeNav = () => {
        setOpenNav(false);
    };

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <Navbar
            className={
                "mx-auto " +
                "py-3 " +
                "max-w-full " +
                "my-auto " +
                "rounded-t-none " +
                "bg-black " +
                "border-2 " +
                "border-t-0 " +
                "border-x-0 " +
                "border-b-[#5DB3B6] " +
                "fixed " +
                "top-0 " +
                "z-10 " +
                "w-full " +
                "shadow-md " +
                "shadow-black/5 " +
                "dark:bg-neutral-600 " +
                "dark:shadow-black/10 " +
                "lg:flex-wrap " +
                "lg:justify-start " +
                "lg:py-4"
            }
        >

            <div
                className={
                    "flex " +
                    "items-center " +
                    "justify-between " +
                    "text-blue-gray-900"
                }
            >
                <ScrollLink href={"#home"}
                            to={"home"}
                            smooth={true}
                            duration={500}
                            offset={-80}
                            onClick={closeNav}
                            className={
                                "flex " +
                                "items-center " +
                                "hover:text-[#5DB3B6] " +
                                "transition-colors " +
                                "text-white " +
                                "font-bold"
                            }
                >
                    <Image src={"/img/logo.webp"}
                           alt={"logo"}
                           width={100}
                           height={100}
                           className={
                               "-ml-5"
                           }
                    />
                </ScrollLink>

                <div
                    className={
                        "hidden " +
                        "lg:block"
                    }
                >
                    <NavList/>
                </div>

                <IconButton
                    variant={"text"}
                    aria-label={"Menu"}
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                    className={
                        "ml-auto " +
                        "h-6 " +
                        "w-6 " +
                        "text-inherit " +
                        "hover:bg-transparent " +
                        "focus:bg-transparent " +
                        "active:bg-transparent " +
                        "lg:hidden"
                    }
                >

                    {openNav ? (
                        <XMarkIcon strokeWidth={2}
                                   className={
                                       "h-6 " +
                                       "w-6 " +
                                       "text-white"
                                   }
                        />
                    ) : (
                        <Bars3Icon strokeWidth={2}
                                   className={
                                       "h-6 " +
                                       "w-6 " +
                                       "text-white"
                                   }
                        />
                    )}

                </IconButton>

            </div>

            <Collapse open={openNav}>
                <NavList closeNav={closeNav}/>
            </Collapse>

        </Navbar>
    );
}