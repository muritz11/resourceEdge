import { Footer } from "./mini/Footer";
import { AdminLogistics } from "./sections/AdminLogistics";
import { Finance } from "./sections/Finance";
import { Header } from "./sections/Header";
import { HumanResources } from "./sections/HumanResources";
import { Patners } from "./sections/Patners";

export const LandingPage = () => {

    return (
        <div>
            <main className="x-spacing">
                <Header />
            </main>
            <HumanResources />
            <main className="x-spacing">
                <AdminLogistics />
                <Finance />
                <Patners />
            </main>
            <Footer />
        </div>
    )
}