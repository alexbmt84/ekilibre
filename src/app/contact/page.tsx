import {Contact} from "@/components/component/contact-form";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact | Ekilibre84",
};

export default function Page() {
    return (
        <Contact />
    );
}