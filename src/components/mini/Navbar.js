import { Link } from "react-router-dom";
import logo from "../../imgs/Group.svg";

export const Navbar = (props) => {

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
                    <Link to="/signup" className="link s-up">Sign up</Link>
                    <Link to="/login" className="link s-in">Sign in</Link>
                </div>
                <div className="nav-responsive">
                    <i className="ri-menu-line" onClick={ props.openNav }></i>
                </div>
            </div>
        </nav>
    )
}