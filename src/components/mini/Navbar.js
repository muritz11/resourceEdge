import { Link } from "react-router-dom";

export const Navbar = () => {

    return (
        <nav className="nav">
            <div className="nav-left">
                <h2><Link to="/" className="link logo">resource edge</Link></h2>

                <Link to="/features" className="link nav-link">Features</Link>
                <Link to="/about" className="link nav-link">About</Link>
            </div>
            <div className="nav-right">
                <Link to="/features" className="link s-in">Sign up</Link>
                <Link to="/about" className="link s-out">Sign in</Link>
            </div>
        </nav>
    )
}