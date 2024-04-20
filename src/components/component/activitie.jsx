import Image from "next/image";
import {AccordionCustomIcon} from "@/app/provider";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";

export function CardDefault(props) {
    return (
        <Card
            className={
                "mt-24 " +
                "min-h-[650px] " +
                "h-auto " +
                "border-8 " +
                "border-[#5DB3B6] md:w-[700px] w-82"
            }
        >
            <CardHeader
                color={"blue-gray"}
                className={
                    "relative " +
                    "h-56 " +
                    "mt-3 md:h-[400px]"
                }
            >
                    <Image
                        src={props.cardImage}
                        alt={"ekilibre-card-image"}
                        width={400}
                        height={400}
                        className={
                            "h-full " +
                            "w-full " +
                            "object-cover"
                        }
                    />
            </CardHeader>

            <CardBody
                className={
                    "min-h-[120px] " +
                    "max-h-[120px]"
                }
            >
                <Typography
                    variant={"h3"}
                    color={"black"}
                    className={"mb-3 text-2xl"}
                >
                    {props.cardTitle}
                </Typography>

                <Typography variant={"paragraph"}
                            className={"mb-3 text-lg"}>
                    {props.cardDescription}
                </Typography>

            </CardBody>

            <CardFooter className={"pt-0"}>

                <AccordionCustomIcon
                    accDescriptionHeader={"Description"}
                    accDescriptionBody={props.cardDescriptionBody}
                    accPeriodHeader={"Périodes"}
                    accPeriodBody={props.cardPeriod}
                    accPricesHeader={"Tarifs"}
                    accPricesDomicile={props.cardPricesDomicile}
                    accPricesPool={props.cardPricesPool}
                />

            </CardFooter>

        </Card>
    );
}