import {
    Home,
    About,
    Images,
    Activities,
    Contact,
    Bmi
} from "@/app/provider";

export function Landing() {
    return (

        <div className="flex flex-col min-h-[100dvh]">
            <main id={"main"}
                  className="flex-1 bg-black">
                <Home/>
                <About/>
                <Images/>
                <Activities/>
                <Contact/>
                <Bmi/>
            </main>
        </div>
    )
}