import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import Image from "next/image";

function NavList() {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <Link href={"/"}
                      className="flex items-center hover:text-[#5DB3B6] transition-colors text-white font-bold">
                    Accueil
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer flex items-center hover:text-[#5DB3B6] transition-colors text-white font-bold">
                    À propos
                </ScrollLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <ScrollLink to="activities" smooth={true} duration={500} className="cursor-pointer flex items-center hover:text-[#5DB3B6] transition-colors text-white font-bold">
                    Les activités
                </ScrollLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#" className="flex items-center hover:text-[#5DB3B6] transition-colors text-white font-bold">
                    Description et tarifs
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <Link href={"/contact"}
                      className="flex items-center hover:text-[#5DB3B6] transition-colors text-white font-bold">
                    Contact
                </Link>
            </Typography>
        </ul>
    );
}

export function NavbarSimple() {
    const [openNav, setOpenNav] = React.useState(false);

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
            className="mx-auto py-3 max-w-full my-auto rounded-t-none bg-black border-2 border-t-0 border-x-0 border-b-[#5DB3B6]">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Image src={"/logo.webp"} alt={"logo"} width={100} height={100} className={"-ml-5"}/>
                <div className="hidden lg:block">
                    <NavList/>
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6 text-white" strokeWidth={2}/>
                    ) : (
                        <Bars3Icon className="h-6 w-6 text-white" strokeWidth={2}/>
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList/>
            </Collapse>
        </Navbar>
    );
}