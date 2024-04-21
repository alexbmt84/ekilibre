import Image from "next/image";

export function About() {

    return (

        <section id={"about"}
                 className="w-full mt-12 pt-12 md:pt-24 border-t border-[#5DB3B6] bg-black">

            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 mx-auto">

                <div className="space-y-3">

                    <h2 className="pt-12 uppercase text-3xl text-white font-bold tracking-tighter md:text-5xl/tight">
                        diplômes
                    </h2>

                    <h3 className="uppercase mx-auto py-5 max-w-[600px] text-[#5DB3B6] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        BPJEPS AAN
                    </h3>
                    <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Brevet Professionnel Jeunesse Éducation Populaire et du Sport - Activités Aquatiques et
                        Natation
                    </p>

                    <h3 className="uppercase mx-auto py-3 max-w-[600px] text-[#5DB3B6] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        BEESAPT - Spécialité Sport Santé / Pilates
                    </h3>
                    <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Brevet d&apos;État d&apos;Éducateur Sportif en Activités Physiques pour Tous
                    </p>

                    <h3 className="uppercase mx-auto py-3 max-w-[600px] text-[#5DB3B6] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Maître praticien massages bien être
                    </h3>

                    <h3 className="uppercase mx-auto pt-3 max-w-[600px] text-[#5DB3B6] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        BEES 1er degré football
                    </h3>

                </div>

                <Image src={"/img/tree.webp"}
                       alt={"wave"}
                       width={350}
                       height={350}
                       className={"swaying py-10 mx-auto"}
                />

            </div>

        </section>
    )
}