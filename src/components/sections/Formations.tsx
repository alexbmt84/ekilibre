import {data} from "@/app/data";
import {CardDefault} from "@/components/utils/CardActivity";
import { TrainingCourseCard } from '@/components/utils/TrainingCourseCard'
import { CourseGrid } from '@/components/utils/CourseGrid'
import {FormationMovie} from "@/components/utils/FormationMovie";

export function Formations() {

    return (

        <section id={"formations"}
                 className="w-full py-12 md:py-24 border-t bg-black">

            <div
                className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 mx-auto w-full">

                <div className="space-y-3 w-full">

                    <h2 className="pt-12 uppercase text-3xl font-bold text-white tracking-tighter md:text-5xl/tight mb-3">
                        Académie Ekilibre Sécurité Piscine
                    </h2>

                    <h3 className="pt-16 uppercase text-2xl font-bold text-gray-500 tracking-tighter md:text-4xl/tight mb-3 pb-16">
                        Pourquoi cette formation ?
                    </h3>

                    <FormationMovie/>

                    <p className={"max-w-[700px] text-gray-500 mx-auto pt-20 text-justify tracking-wide font-body md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"}>
                        <span className={"font-bold text-[#5DB3B6]"}>La première formation en France</span> dédiée aux parents pour prévenir les noyades et adopter les bons réflexes autour d&apos;une piscine.
                        Programme conçu et animé par des formateurs <span className={"font-bold text-[#5DB3B6]"}>diplômés d&apos;État,</span> maîtres-nageurs sauveteurs et secouristes professionnels.

                    </p>

                    <p className={"max-w-[700px] text-gray-500 mx-auto text-justify tracking-wide font-body md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"}>
                        La noyade d&apos;enfant survient en silence, <span
                        className={"font-bold text-[#5DB3B6]"}>en moins de 30 secondes, </span> 
                        souvent sous supervision d&apos;un adulte.

                    </p>
                    <p className={"max-w-[700px] text-gray-500 mx-auto text-justify tracking-wide font-body md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"}>
                        <span className={"font-bold text-[#5DB3B6]"}>La solution : </span>
                        apprendre à surveiller correctement, éviter les erreurs, et réagir vite avec les bons gestes.
                    </p>
                   
                    <p className={"max-w-[700px] mx-auto text-gray-500 text-justify tracking-wide font-body md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"}>
                        <span className={"font-bold text-[#5DB3B6]"}>Ekilibre </span>vous propose une formation simple, complète et immédiatement applicable, disponible en 1 ou 2 jours selon votre niveau souhaité.
                    </p>

                    <p className={"max-w-[700px] mx-auto text-gray-500 text-justify tracking-wide font-body md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"}>
                        Les formations 
                        <span className={"font-bold text-[#5DB3B6]"}> de l&apos;Académie Ekilibre Sécurité Piscine  </span>se déroulent où vous le souhaitez : à domicile dans votre propre piscine, chez un proche, dans un lieu privé équipé ou sur l&apos;un de nos sites partenaires, toujours précédées d&apos;une checklist de sécurité.
                    </p>

                    <p className={"max-w-[700px] mx-auto text-gray-500 text-justify tracking-wide font-body md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"}>
                        Conçue pour <span className={"font-bold text-[#5DB3B6]"}>les parents, grands-parents, familles avec piscine, assistantes maternelles, baby-sitters ou encore groupes d&apos;amis et comités d&apos;entreprise,</span> la formation ne nécessite aucun niveau sportif préalable.
                    </p>

                    <p className={"max-w-[700px] mx-auto text-gray-500 text-justify tracking-wide font-body md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"}>
                        À l&apos;issue de la session, vous recevez un certificat <span className={"font-bold text-[#5DB3B6]"}>de l&apos;Académie Ekilibre Sécurité Piscine</span>, un protocole familial personnalisé, la fiche “10 réflexes sécurité piscine”, ainsi que l&apos;ensemble des supports pédagogiques. Une option complémentaire permet également d&apos;obtenir le diplôme <span className={"font-bold text-[#5DB3B6]"}>PSC1</span> (Premiers secours citoyen niveau 1).
                    </p>

                    <CourseGrid />

                </div>

            </div>

        </section>
    )
}