import {BMICalculatorComponent} from "@/app/provider";

export function Bmi() {
    return (
        <section id={"bmi"}
                 className="w-full py-12 md:py-24 lg:py-32 border-t bg-black border-[#5DB3B6]">

            <div className="container grid items-center gap-10 px-4 text-center md:px-6 mx-auto">

                <div className="space-y-4">
                    <BMICalculatorComponent/>
                </div>

            </div>

        </section>
    )
}
