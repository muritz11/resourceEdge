import { useState } from "react";
import { Banner } from "../mini/Banner";
import { Navbar } from "../mini/Navbar";
import { NavDropdown } from "../mini/NavDropdown";

export const Header = () => {

    const [navDropdown, setNavDropdown] = useState(false)

    const toggleNav = () => {
        setNavDropdown(!navDropdown)
    }

    return (
        <header>
            <NavDropdown closeNav={toggleNav} nav={navDropdown} />
            <Navbar openNav={toggleNav} />
            <Banner />
        </header>
    )
}