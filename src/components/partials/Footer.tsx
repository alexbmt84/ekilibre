import {FooterNav} from "@/components/utils/FooterNav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export function Footer() {
    return (
        <footer
            className={
                "flex " +
                "flex-col " +
                "gap-2 " +
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

            <div>

                <div className="flex mt-6 -mx-4 justify-center px-4 gap-4">

                    <Link
                        href={"https://twitter.com/ekilibre84"}
                        target={"_blank"}
                        aria-label="Twitter"
                    >
                        <FontAwesomeIcon icon={faTwitter} className={"text-white fa-2x"}/>
                    </Link>

                    <Link
                        href={"https://www.facebook.com/profile.php?id=100089707174974"}
                        target={"_blank"}
                        aria-label="Facebook"
                    >
                        <FontAwesomeIcon icon={faFacebook}  className={"text-white fa-2x"}/>
                    </Link>

                    <Link
                        href={"https://www.instagram.com/ekilibre84/"}
                        target={"_blank"}
                        aria-label="Instagram"
                    >

                        <FontAwesomeIcon icon={faInstagram} className={"text-white fa-2x"}/>
                    </Link>


                    <FontAwesomeIcon icon={faEnvelope} className={"text-white fa-2x mb-5 cursor-pointer"} onClick={() => window.location.href = 'mailto:alexisbeaumontdev@gmail.com'}/>

                </div>

                <div className={"text-center sm:text-center"}>
                    <a href="tel:number"
                       aria-label={"tel"}
                       className="text-white lg:text-left xl:text-left">06.08.37.57.53</a>
                </div>

                <p className={"text-xs text-white mt-3"}>
                    © 2024 Ekilibre84 - Sébastien Jacquemin. Tous droits réservés.
                </p>


            </div>

            <FooterNav/>

        </footer>
    )
}