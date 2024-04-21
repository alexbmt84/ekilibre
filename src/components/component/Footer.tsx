import Link from "next/link";

export function Footer() {
    return (
        <footer
            className={
                "flex " +
                "flex-col " +
                "gap-2 " +
                "sm:flex-row " +
                "py-6 " +
                "w-full " +
                "shrink-0 " +
                "items-center " +
                "px-4 " +
                "md:px-6 " +
                "border-t " +
                "bg-black " +
                "border-[#5DB3B6]"
            }
        >

            <p
                className={
                    "text-xs " +
                    "text-white"
                }
            >
                © 2024 Ekilibre84 - Sébastien Jacquemin. Tous droits réservés.
            </p>

            <nav
                className={
                    "sm:ml-auto " +
                    "flex " +
                    "gap-4 " +
                    "sm:gap-6"
                }
            >

                <Link
                    href={"#"}
                    className={
                        "text-xs " +
                        "hover:underline " +
                        "text-white " +
                        "underline-offset-4"
                    }
                >
                    Mentions légales
                </Link>

                <Link
                    href={"#"}
                    className={
                        "text-xs " +
                        "hover:underline " +
                        "text-white " +
                        "underline-offset-4"
                    }
                >
                    Confidentialité
                </Link>

            </nav>

        </footer>
    )
}