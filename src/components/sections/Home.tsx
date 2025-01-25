import Image from "next/image";

export function Home() {

    return (
        <section id={"home"}
                 className="w-full pt-12 md:pt-24 lg:pt-32 xl:pt-40 bg-black">

            <div className="container flex flex-col items-center justify-center px-4 space-y-4 md:px-6 mx-auto">

                <div className="space-y-2 text-center">

                    <Image src={"/img/logo.png"}
                           alt={"wave"}
                           width={400}
                           height={400}
                           className={"mx-auto"}
                    />

                    <h2 className="max-w-[700px] mt-20 mb-10 md:mt-0 text-white text-4xl font-bold tracking-tighter sm:text-6xl/relaxed xl:text-7xl/relaxed">
                        Sans plaisir, la pratique n&apos;est rien.
                    </h2>

                    <h3 className="max-w-[700px] py-10 text-justify text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mx-auto">
                        Fort d&apos;une expérience de 25 ans dans l&apos;animation et l&apos;éducation sportive,
                        Sébastien met sa passion, son enthousiasme et son énergie à votre service pour vous
                        accompagner dans
                        votre remise en forme et votre bien être, aussi bien physiquement que mentalement.
                    </h3>

                </div>

                <div className={"py-5"}>

                    <Image fetchPriority={"high"}
                           src={"/img/compressedImg1.webp"}
                           alt={"image1"}
                           width={700}
                           height={700}
                           objectFit={""}
                           className="rounded border-8 border-[#5DB3B6]"
                           priority={true}
                    />

                </div>

                <Image src={"/img/sun1.webp"}
                       alt={"wave"}
                       width={180}
                       height={180}
                       className={"rotating py-6 mx-auto"}/>

            </div>

        </section>
    )
}