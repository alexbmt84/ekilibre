import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import {document} from "postcss";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

export function AccordionCustomIcon(props) {

    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)}>{props.accDescriptionHeader}</AccordionHeader>
                <AccordionBody>
                    {props.accDescriptionBody}
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                    {props.accPeriodHeader}
                </AccordionHeader>
                <AccordionBody>
                    {props.accPeriodBody}
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                    {props.accPricesHeader}
                </AccordionHeader>
                <AccordionBody>
                    {props.accPricesDomicile.length > 0 ?
                        document.innerHtml = <div><span className={"font-bold"}>A domicile</span><p>{props.accPricesDomicile}</p></div> :
                        document.innerText = props.accPricesDomicile}
                </AccordionBody>
                <AccordionBody>
                    {props.accPricesPool.length > 0 ?
                        document.innerHtml = <div><span className={"font-bold"}>A la piscine de Bédoin</span><p>{props.accPricesPool}</p></div> :
                        document.innerText = props.accPricesPool}
                </AccordionBody>
            </Accordion>
        </>
    );
}