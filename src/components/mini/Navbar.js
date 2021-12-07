import { Link } from "react-router-dom";
import logo from "../../imgs/Group.svg";

export const Navbar = () => {

    return (
        <nav className="nav">
            <div className="nav-left">
                <div className="nav-lg flex">
                    <h2><Link to="/" className="link logo">resource edge</Link></h2>

                    <Link to="/features" className="link nav-link">Features</Link>
                    <Link to="/about" className="link nav-link">About</Link>
                </div>
                <div className="nav-responsive">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                
            </div>
            <div className="nav-right">
                <div className="nav-lg">
                    <Link to="/features" className="link s-in">Sign up</Link>
                    <Link to="/about" className="link s-out">Sign in</Link>
                </div>
                <div className="nav-responsive">
                    <i className="ri-menu-line"></i>
                </div>
            </div>
        </nav>
    )
}