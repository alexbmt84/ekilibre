import {Carousel, IconButton} from "@material-tailwind/react";
import Image from "next/image";

export function CarouselCustomArrows() {
    return (
        <Carousel
            className="rounded-xl w-[100%] lg:w-[59%] mx-auto border-8 border-[#5DB3B6]"
            prevArrow={({handlePrev}) => (
                <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    aria-label={"Previous"}
                    onClick={handlePrev}
                    className="!absolute top-2/4 left-4 -translate-y-2/4 bg-[#5DB3B6] hover:bg-[#5DB3B6]"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                        />
                    </svg>
                </IconButton>
            )}
            nextArrow={({handleNext}) => (
                <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    aria-label={"Next"}
                    onClick={handleNext}
                    className="!absolute top-2/4 !right-4 -translate-y-2/4 bg-[#5DB3B6] hover:bg-[#5DB3B6]"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                    </svg>
                </IconButton>
            )}
        >
            <video controls
                   autoPlay={true}
                   src="/movie.MP4"
                   className="h-full w-full object-cover"
                   width={700}
                   height={700}
            />

            <Image
                src={"/img2.webp"}
                alt={"image2"}
                className={"h-full w-full object-cover"}
                width={700}
                height={700}
            />
            <Image
                src={"/sebao.webp"}
                alt={"image2"}
                className={"h-full w-full object-cover"}
                width={700}
                height={700}
            />
            <Image
                src={"/sebao.webp"}
                alt={"image3"}
                className={"h-full w-full object-cover"}
                width={700}
                height={700}
            />
        </Carousel>
    );
}