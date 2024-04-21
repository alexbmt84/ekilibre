import {data} from "@/app/data";
import {CardDefault} from "@/components/utils/CardActivity";

export function Activities() {

    return (

        <section id={"activities"}
                 className="w-full py-12 md:py-24 border-t bg-black">

            <div
                className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 mx-auto w-full">

                <div className="space-y-3 w-full">

                    <h2 className="pt-12 uppercase text-3xl font-bold text-white tracking-tighter md:text-5xl/tight mb-3">
                        Les activités
                    </h2>

                    <p className={"max-w-[700px] text-gray-500 mx-auto pt-20 text-justify tracking-wide font-body md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"}>
                        Explorez un monde où l&apos;équilibre et le dynamisme rencontrent le bien-être et la
                        performance avec les activités d&apos;<span
                        className={"font-bold text-[#5DB3B6]"}>Ekilibre</span>.

                    </p>
                    <p className={"max-w-[700px] text-gray-500 mx-auto text-justify tracking-wide font-body md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"}>
                        Que vous soyez situé à Malaucène, à Bédoin ou près du Mont Ventoux,
                        <span className={"font-bold text-[#5DB3B6]"}> Sébastien Jacquemin</span>,
                        votre coach sportif dédié, vous ouvre les portes d&apos;une expérience transformatrice.
                    </p>
                    <p className={"max-w-[700px] text-gray-500 mx-auto text-justify tracking-wide font-body md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"}>
                        Des leçons de natation qui éveillent l&apos;aquaphobe au massage bien-être sculptant
                        votre silhouette,
                        chaque session est une invitation à redécouvrir votre potentiel.
                    </p>
                    <p className={"max-w-[700px] text-gray-500 mx-auto text-justify tracking-wide font-body md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"}>
                        <span className={"font-bold text-[#5DB3B6]"}>Prêt/es </span>
                        pour un coaching
                        sportif personnalisé qui va au-delà des limites et
                        une remise en forme qui résonne avec sérénité <span
                        className={"font-bold text-[#5DB3B6]"}>?</span>
                    </p>
                    <p className={"max-w-[700px] mx-auto text-gray-500 text-justify tracking-wide font-body md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"}>
                        Laissez <span className={"font-bold text-[#5DB3B6]"}>Ekilibre</span> être le catalyseur de votre
                        voyage vers la meilleure version de
                        vous-même —
                        physiquement et spirituellement.</p>

                    <div className={"flex flex-wrap items-center justify-center w-full gap-10"}>
                        {data.map((product: {
                            id: number;
                            image: string;
                            title: string;
                            description: string;
                            descriptionCard: string;
                            button: string;
                            periods: Array<string>;
                            prices: Array<Array<Array<string>>> | Array<Array<string>>
                        }) => (
                            <CardDefault key={product.id}
                                         cardImage={product.image}
                                         cardTitle={product.title}
                                         cardDescription={product.description}
                                         cardDescriptionBody={product.descriptionCard}
                                         cardButton={product.button}
                                         cardPeriod={product.periods}
                                         cardPricesDomicile={product.prices[0]}
                                         cardPricesPool={product.prices[1]}
                            />
                        ))}
                    </div>

                </div>

            </div>

        </section>
    )
}