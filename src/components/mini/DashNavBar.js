import avatar from "../../imgs/image 1.svg";
import menu from "../../imgs/menu.svg";
import { Link } from "react-router-dom";
import { DashDropdown } from "./DashDropdown";
import { useState } from "react";

export const DashNavBar = () => {

    const [renderDrp, setRenderDrp] = useState(false)

    window.onclick = function(event) {

        const modal = document.querySelector("#modal")

        if (event.target === modal) {
            console.log("hmm")
            setRenderDrp(!renderDrp)
        }
    }


    const toggleDropdwn = () => {
        setRenderDrp(!renderDrp)
    }

    return (
        <nav className="dash-nav">
            <div className="flex-sm">
                <div className="w-50 w-sm-70">
                        <div className="flex-sm">
                            <img src={menu} alt="" className="dash-menu-btn" />
                            <Link to="/" className="logo link bf-tm px-sm-0"><h3>resource edge</h3></Link>
                            <p className="TM">TM Dashboard</p>
                        </div>
                </div>
                <div className="w-50 w-sm-30 txt-right dash-avatar">
                        <img src={avatar} alt="avatar" className="avatar" onClick={toggleDropdwn} />
                </div>
            </div> 
            { renderDrp ? <DashDropdown name="Muritz" /> : '' }
        </nav>
    )
}