import avatar from "../../imgs/image 1.svg";
import menu from "../../imgs/menu.svg";
import { Link } from "react-router-dom";

export const DashNavBar = () => {

    return (
        <nav className="dash-nav">
            <div className="flex-sm">
                <div className="w-50">
                        <div className="flex-sm">
                            <img src={menu} alt="" className="dash-menu-btn" />
                            <h2><Link to="/" className="logo link">resource edge</Link></h2>
                            <p className="TM">TM Dashboard</p>
                        </div>
                </div>
                <div className="w-50 txt-right">
                        <img src={avatar} alt="avatar" className="avatar" />
                </div>
            </div> 
        </nav>
    )
}