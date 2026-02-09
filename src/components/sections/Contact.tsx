import {ContactForm} from "@/components/utils/ContactForm";
import Image from "next/image";

export function Contact() {
    return (
        <section id={"contact"}
                 className="w-full border-t bg-black">
            <ContactForm/>
            <Image src={"/img/newlogo.webp"}
                                   alt={"wave"}
                                   width={150}
                                   height={150}
                                   className={"py-6 mb-6 mx-auto"}/>
        </section>
    )
}
