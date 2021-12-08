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
                            <Link to="/" className="logo link bf-tm"><h3>resource edge</h3></Link>
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