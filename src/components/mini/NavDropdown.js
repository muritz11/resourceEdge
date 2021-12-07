import { Link } from "react-router-dom"
import logo from "../../imgs/Group.svg"

export const NavDropdown = (props) => {

    return (
        <>
            {props.nav && (
                <div className="nav-dropdown">
                    <div className="nav-header flex-sm">
                        <div className="nav-left">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="nav-right">
                            <i className="ri-close-line ri-2x" onClick={props.closeNav}></i>
                        </div>
                    </div>
                    <h3><Link to="/features" className="link">Features</Link></h3>
                    <h3><Link to="/about" className="link">About</Link></h3>
                    <p className="s-in s-in-sm"><Link className="link whyte" to="/login">Log In</Link></p>
                    <p className="s-in-sm"><Link className="link s-up" to="/signup">Sign Up</Link></p>
                </div>
            )}
        </>
    )
}