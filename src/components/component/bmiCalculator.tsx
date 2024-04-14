import {useState} from "react";
import BMICalculator from "../../lib/BmiCalculator";

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
        <div>
            <h1>Calculateur d&apos;IMC</h1>
            <div>
                <label>Poids (kg):</label>
                <input
                    type="number"
                    className={"text-black"}
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
            </div>
            <div>
                <label>Taille (cm):</label>
                <input
                    type="number"
                    className={"text-black"}
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
            </div>
            <button onClick={handleCalculate}>Calculer l&apos;IMC</button>
            {bmi && <p>Votre IMC est de: {bmi}</p>}
            {interpretation && <p>Interprétation: {interpretation}</p>}
        </div>
    );
}

export default BMICalculatorComponent;