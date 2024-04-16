import {Carousel, IconButton} from "@material-tailwind/react";
import Image from "next/image";
import {Video} from "lucide-react";

export function CarouselCustomArrows() {
    return (
        <Carousel
            className="rounded-xl w-[100%] lg:w-[59%] mx-auto border-8 border-[#5DB3B6]"
            prevArrow={({handlePrev}) => (
                <IconButton
                    variant="text"
                    color="white"
                    size="lg"
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
            <Video controls
                   autoPlay={true}
                   src={"/movie.MP4"}
                   type={"video/mp4"}
                   className={"h-full w-full object-cover"}
            />

            <Image
                src={"/img2.JPG"}
                alt={"image2"}
                className={"h-full w-full object-cover"}
            />
            <Image
                src={"/sebao.webp"}
                alt={"image2"}
                className={"h-full w-full object-cover"}
            />
            <Image
                src={"https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"}
                alt={"image3"}
                className={"h-full w-full object-cover"}
            />
        </Carousel>
    );
}