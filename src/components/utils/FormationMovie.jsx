import {Carousel, IconButton} from "@material-tailwind/react";
import Image from "next/image";

export function FormationMovie() {
    return (
        <Carousel
            className="rounded-xl h-[350px] w-[100%] mx-auto border-8 border-[#5DB3B6] bg-black"
            prevArrow={({handlePrev}) => (
                <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    aria-label={"Previous"}
                    onClick={handlePrev}
                    className="hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6 z-10"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            color={"white"}
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
                    className="hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6 z-10"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            color={"white"}
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                    </svg>
                </IconButton>
            )}
        >
            <video controls
                   src={"/videos/formation.mp4"}
                   className={"h-full w-full object-contain"}
                   width={700}
                   height={700}
            />

        </Carousel>
    );
}