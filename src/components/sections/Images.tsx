import {CarouselCustomArrows} from "@/components/utils/Carousel";
import Image from "next/image";

export function Images() {

    return (

        <section id={"images"}
                 className="w-full mt-10 py-20 bg-white dark:bg-gray-800">

            <div className="container grid items-center gap-6 px-4 md:px-6 mx-auto">

                <h2 className="text-3xl text-[#5DB3B6] font-bold tracking-tighter sm:text-5xl w-[100%] lg:w-[60%] text-center mx-auto mb-12">
                    ... À chacun son rythme ...
                </h2>

                <h3 className="max-w-[720px] text-2xl text-black font-bold tracking-tighter sm:text-5xl text-justify mx-auto mb-12">
                    Ekilibre recouvre la pratique d’activités physiques, sportives et bien être qui
                    contribuent à la santé physique, psychologique et sociale de l&apos;individu.
                </h3>

                <CarouselCustomArrows/>

            </div>

            <Image src={"/img/wave1.webp"}
                   alt={"wave"}
                   width={600}
                   height={600}
                   className={"mt-20 mx-auto"}
            />

        </section>
    )
}