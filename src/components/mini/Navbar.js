import { Link } from "react-router-dom";
import logo from "../../imgs/Group.svg";
import { useSelector, useDispatch } from "react-redux"
import { setLoggedIn } from "../../redux/actions/LoggedInAction"
import { loggedUser } from "../../redux/actions/userActions"

export const Navbar = (props) => {

    const isLoggedIn = useSelector((state) => state.isLoggedIn)

    const dispatch = useDispatch()

    const logOut = (e) => {
        e.preventDefault()
        dispatch(setLoggedIn(false))
        dispatch(loggedUser({}))
    }


    return (
        <nav className="nav">
            <div className="nav-left">
                <div className="nav-lg flex">
                    <h2><Link to="/" className="link logo logo-pad">resource edge</Link></h2>

                    <Link to="/" className="link nav-link pad-top-15">Features</Link>
                    <Link to="/" className="link nav-link pad-top-15">About</Link>
                </div>
                <div className="nav-responsive">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                
            </div>
            <div className="nav-right">
                <div className="nav-lg">
                    <Link to="/" className="link s-up">Sign up</Link>
                    { isLoggedIn ?
                        <Link className="link s-in whyte-hover" onClick={logOut}>Log Out</Link> :
                        <Link className="link s-in whyte-hover" to="/login">Log In</Link>
                    
                    }
                </div>
                <div className="nav-responsive">
                    <i className="ri-menu-4-line ri-2x" onClick={ props.openNav }></i>
                </div>
            </div>
        </nav>
    )
}