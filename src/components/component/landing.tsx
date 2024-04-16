/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/88T7MLQ2m2l
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

 import { IBM_Plex_Sans } from 'next/font/google'
 import { Poppins } from 'next/font/google'

 ibm_plex_sans({
 subsets: ['latin'],
 display: 'swap',
 })

 poppins({
 subsets: ['latin'],
 display: 'swap',
 })

 To read more about using these font, please visit the Next.js documentation:
 - App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
 - Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
 **/
import {JSX, SVGProps} from "react"
import Image from "next/image";
import {BMICalculatorComponent, CarouselCustomArrows, NavbarSimple} from "@/app/provider";

export function Landing() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <header className="h-14 flex items-center z-10 bg-black">
                <NavbarSimple/>
            </header>
            <main className="flex-1 bg-black">
                <section className="w-full pt-12 md:pt-24 lg:pt-32 xl:pt-40 bg-black">
                    <div
                        className="container flex flex-col items-center justify-center px-4 space-y-4 md:px-6 mx-auto">
                        <div className="space-y-2 text-center">
                            <h1 className="mt-20 mb-10 md:mt-0 text-white text-4xl font-bold tracking-tighter sm:text-6xl/relaxed xl:text-7xl/relaxed">
                                Sans plaisir, la pratique n&apos;est rien.
                            </h1>
                            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mx-auto">
                                Fort d&apos;une expérience de 22 ans dans l&apos;animation et l&apos;éducation sportive,
                                Sébastien met
                                sa passion, son enthousiasme et son énergie à votre service pour vous accompagner dans
                                votre remise en forme et votre bien être, aussi bien physiquement que mentalement. </p>
                        </div>

                        <div className={"py-10"}>
                            <Image src={"/image1.webp"} alt={"image1"} width={700} height={700}
                                   className="rounded border-8 border-[#5DB3B6]"/>

                        </div>
                        <Image src={"/sun1.webp"} alt={"wave"} width={180} height={180}
                               className={"rotating py-6 mx-auto"}/>

                    </div>
                </section>
                <section id="about" className="w-full mt-12 pt-12 md:pt-24 lg:pt-32 border-t border-[#5DB3B6] bg-black">
                    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 mx-auto">
                        <div className="space-y-3">
                            <h2 className="text-3xl text-white font-bold tracking-tighter md:text-4xl/tight">DIPLÔMES</h2>
                            <p className="mx-auto py-3 max-w-[600px] text-[#5DB3B6] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                BPJEPS AAN
                            </p>
                            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Brevet Professionnel Education Populaire Activités Aquatiques et Natation
                            </p>
                            <p className="mx-auto py-3 max-w-[600px] text-[#5DB3B6] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                BEESAPT - Spécialité Sport Santé / Pilates
                            </p>
                            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Brevet Etat Educateur Sportif Activités Physiques pour Tous
                            </p>
                            <p className="mx-auto py-3 max-w-[600px] text-[#5DB3B6] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                MAITRE PRATICIEN MASSAGES BIEN ÊTRE
                            </p>
                            <p className="mx-auto pt-3 max-w-[600px] text-[#5DB3B6] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                BEES 1er degré FOOTBALL
                            </p>
                        </div>
                        <Image src={"/tree.webp"} alt={"wave"} width={350} height={350}
                               className={"swaying py-10 mx-auto"}/>
                    </div>
                </section>
                <section className="w-full mt-10 py-20 bg-white dark:bg-gray-800">
                    <div className="container grid items-center gap-6 px-4 md:px-6 mx-auto">
                        <h2 className="text-3xl text-[#5DB3B6] font-bold tracking-tighter sm:text-5xl w-[100%] lg:w-[60%] text-center mx-auto mb-12">
                            ... À chacun son rythme ...
                        </h2>
                        <h3 className="text-2xl text-black font-bold tracking-tighter sm:text-5xl w-[60%] text-center mx-auto mb-12">
                            Ekilibre recouvre la pratique d’activités physiques, sportives et bien être qui
                            contribuent à la santé physique, psychologique et sociale de l&apos;individu.
                        </h3>
                        <CarouselCustomArrows/>
                    </div>
                    <Image src={"/wave1.webp"} alt={"wave"} width={600} height={600} className={"mt-20 mx-auto"}/>
                </section>
                <section id={"activities"} className="w-full py-12 md:py-24 lg:py-32 border-t bg-black">
                    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 mx-auto">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold text-white tracking-tighter md:text-4xl/tight">
                                Les activités
                            </h2>
                            <p className={"text-white"}>(En construction)</p>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 border-t bg-black border-[#5DB3B6]">
                    <div className="container grid items-center gap-10 px-4 text-center md:px-6 mx-auto">
                        <div className="space-y-4">
                            <BMICalculatorComponent/>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
        </svg>
    )
}
