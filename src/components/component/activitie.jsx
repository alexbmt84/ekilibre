import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import Image from "next/image";
import {AccordionCustomIcon} from "@/app/provider";

export function CardDefault(props) {
    return (
        <Card className="mt-24 w-72 min-h-[650px] h-auto border-8 border-[#5DB3B6]">
            <CardHeader color="blue-gray" className="relative h-56 mt-3">
                    <Image
                        src={props.cardImage}
                        alt={"card-image"}
                        width={400}
                        height={400}
                        className={"h-full w-full object-cover"}
                    />
            </CardHeader>
            <CardBody className={"min-h-[120px] max-h-[120px]"}>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {props.cardTitle}
                </Typography>
                <Typography>
                    {props.cardDescription}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <AccordionCustomIcon
                    accDescriptionHeader={"Description"}
                    accDescriptionBody={"En construction"}
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