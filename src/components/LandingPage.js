import { Header } from "./sections/Header";
import { HumanResources } from "./sections/HumanResources";

export const LandingPage = () => {

    return (
        <div>
            <main className="home-container">
                <Header />
            </main>
            <HumanResources />
        </div>
    )
}