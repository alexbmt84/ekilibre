import React from "react";
import {document} from "postcss";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns={"http://www.w3.org/2000/svg"}
            fill={"none"}
            viewBox={"0 0 24 24"}
            strokeWidth={4}
            stroke={"#5DB3B6"}
            className={
                `${id === open ? 
                    "rotate-180" : ""
                } 
                h-5 w-5 transition-transform`
            }
        >
            <path strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  d={"M19.5 8.25l-7.5 7.5-7.5-7.5"}
            />
        </svg>
    );
}

export function AccordionCustomIcon(props) {

    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <Accordion
                className={"mt-10 md:mt-0"}
                open={open === 1}
                icon={
                    <Icon
                        id={1}
                        open={open}
                    />
                }
            >

                <AccordionHeader onClick={() => handleOpen(1)}>
                    <h4 className={"text-black font-bold"}>
                        {props.accDescriptionHeader}
                    </h4>
                </AccordionHeader>

                <AccordionBody>
                    <p className={"text-lg text-justify font-medium"}>
                        {props.accDescriptionBody}
                    </p>
                </AccordionBody>

            </Accordion>

            <Accordion
                open={open === 2}
                icon={
                    <Icon
                        id={2}
                        open={open}
                    />
                }
            >

                <AccordionHeader onClick={() => handleOpen(2)}>
                    <h4 className={"text-black font-bold"}>
                        {props.accPeriodHeader}
                    </h4>
                </AccordionHeader>

                <AccordionBody>
                    <p className={"text-lg font-bold text-black mt-5"}>
                        {props.accPeriodBody[0]}
                    </p>
                    <p className={"text-lg font-base text-black"}>
                        {props.accPeriodBody[1]}
                    </p>
                    <p className={"text-lg font-bold text-black mt-5"}>
                        {props.accPeriodBody[2]}
                    </p>
                    <p className={"text-lg font-base text-black"}>
                        {props.accPeriodBody[3]}
                    </p>
                </AccordionBody>

            </Accordion>

            <Accordion
                open={open === 3}
                icon={
                    <Icon
                        id={3}
                        open={open}
                    />
                }
            >

                <AccordionHeader onClick={() => handleOpen(3)}>
                    <h4 className={"text-black font-bold"}>
                        {props.accPricesHeader}
                    </h4>
                </AccordionHeader>

                <AccordionBody>
                    {
                        props.accPricesDomicile.length > 0 ?
                        document.innerHtml =
                            <div>
                                <h5 className={"font-bold text-black text-lg mt-5"}>
                                    À domicile
                                </h5>
                                <p className={"font-normal text-lg"}>{props.accPricesDomicile[0]}</p>
                                <p className={"font-normal text-lg mt-0 pt-0"}>{props.accPricesDomicile[1]}</p>
                            </div> :
                            document.innerHtml = <p className={"text-lg"}>{props.accPricesDomicile}</p>
                    }
                </AccordionBody>

                <AccordionBody>
                    {
                        props.accPricesPool.length > 0 ?
                        document.innerHtml =
                            <div>
                                <h5
                                    className={"font-bold text-black text-lg"}
                                >
                                    À la piscine de Bédoin
                                </h5>
                                <p className={"text-lg"}>{props.accPricesPool[0]}</p>
                                <p className={"text-lg"}>{props.accPricesPool[1]}</p>
                            </div> :
                            document.innerHtml = <p className={"text-lg"}>{props.accPricesPool}</p>
                    }

                </AccordionBody>

            </Accordion>

        </>

    );
}