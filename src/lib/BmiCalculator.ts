class BMICalculator {
    calculateBMI(weightInKg: number, heightInCm: number): number | string {
        if (heightInCm <= 0 || weightInKg <= 0) {
            return "Invalid input. Weight and height must be positive values.";
        }

        let heightInMeters = heightInCm / 100;
        return weightInKg / (heightInMeters * heightInMeters);
    }

    interpretBMI(bmi: number): string {
        if (bmi < 18.5) {
            return "Sous-poids";
        } else if (bmi < 24.9) {
            return "Poids normal";
        } else if (bmi < 29.9) {
            return "Surpoids";
        } else if (bmi < 35) {
            return "Obésité classe I";
        }
        else if (bmi < 40) {
            return "Obésité classe II";
        } else {
            return "Obésité classe III";
        }
    }
}

export default BMICalculator;
