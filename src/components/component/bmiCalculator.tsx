import {useState} from "react";
import BMICalculator from "../../lib/BmiCalculator";
import {Button} from "@/components/ui/button";

function BMICalculatorComponent() {
    const [weight, setWeight] = useState<string>("");
    const [height, setHeight] = useState<string>("");
    const [bmi, setBMI] = useState<string>("");
    const [interpretation, setInterpretation] = useState<string>("");

    const handleCalculate = () => {
        const calculator = new BMICalculator();
        const bmiValue: number | string = calculator.calculateBMI(
            parseFloat(weight),
            parseFloat(height)
        );

        if (typeof bmiValue === "number") {
            const interpretationValue: string = calculator.interpretBMI(bmiValue);
            setBMI(bmiValue.toFixed(2));
            setInterpretation(interpretationValue);
        } else {
            setBMI("");
            setInterpretation(bmiValue);
        }
    };

    return (
        <div className={"bg-black rounded-2xl w-[60%] mx-auto"}>
            <h3 className="text-3xl font-bold text-white tracking-tighter md:text-4xl/tight">Calculateur IMC</h3>
            <div className={"mt-5"}>
                <label className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">Poids (kg):</label>
                <input
                    type="number"
                    placeholder={"70"}
                    className={"mt-5 mb-5 mx-auto text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
            </div>
            <div>
                <label className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">Taille (cm):</label>
                <input
                    type="number"
                    placeholder={"180"}
                    className={"mt-5 mb-10 mx-auto text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
            </div>
            <Button onClick={handleCalculate} className={"w-[80%] h-16"}>Calculer l&apos;IMC</Button>
            {bmi && <p className={"mt-10 text-white font-bold"}>Votre IMC est de: {bmi}</p>}
            {interpretation && <p className={"text-white font-bold"}>Interprétation: {interpretation}</p>}
        </div>
    );
}

export default BMICalculatorComponent;