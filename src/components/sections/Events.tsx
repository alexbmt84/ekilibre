import {data} from "@/app/data";
import {CardDefault} from "@/components/utils/CardActivity";
import { EventGrid } from '@/components/utils/EventGrid';
import Image from "next/image";

export function Events() {

    return (

        <section id={"events"}
                 className="w-full py-12 md:py-24 border-t bg-black">

            <div
                className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 mx-auto w-full">

                <div className="space-y-3 w-full">

                    <h2 className="pt-12 uppercase text-3xl font-bold text-white tracking-tighter md:text-5xl/tight mb-3">
                        Evénements
                    </h2>

                    <h3 className="pt-12 uppercase text-2xl font-bold text-white tracking-tighter md:text-4xl/tight mb-3">
                        Ekilibre Surveillance Aquatique
                    </h3>
                    

                    <p className={"max-w-[700px] text-gray-500 mx-auto pt-2 text-center tracking-wide font-body md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"}>
                        <span
                        className={"font-bold text-[#5DB3B6]"}>La sécurité invisible qui préserve la sérénité de vos invités.</span>

                    </p>

                    <div className={"py-5"}>
  
                      <Image fetchPriority={"high"}
                              src={"/img/events.webp"}
                              alt={"image1"}
                              width={700}
                              height={700}
                              objectFit={""}
                              className="rounded border-8 border-[#5DB3B6]"
                              priority={true}
                      />
  
                    </div>

                    <p className={"max-w-[700px] text-gray-500 mx-auto text-justify py-14 tracking-wide font-body md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"}>
                        Lors d&apos;un mariage, d&apos;une réception privée ou d&apos;un événement haut de gamme, la piscine peut devenir un risque silencieux. <span className={"font-bold text-[#5DB3B6]"}>Ekilibre</span> assure une surveillance professionnelle par un Maître-Nageur Sauveteur diplômé d&apos;État (un ou deux selon l&apos;envergure), entièrement dédiée à la sécurité de vos invités.
                    </p>
                    
                    <p className={"max-w-[700px] text-gray-500 mx-auto text-justify tracking-wide font-body md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"}>
                        <span className={"font-bold text-[#5DB3B6]"}>Ekilibre </span>s&apos;adresse aux réceptions raffinées et aux organisateurs exigeants recherchant une sécurité maîtrisée sans perturber l&apos;élégance de l&apos;événement.
                    </p>

                    <EventGrid/>

                    <div className="flex justify-center pt-20">
                      <Image
                        fetchPriority="high"
                        src="/img/moon_water.gif"
                        alt="Animation eau"
                        width={400}
                        height={400}
                        className="mx-auto rounded"
                        priority
                      />
                    </div>

                </div>

            </div>

        </section>
    )
}