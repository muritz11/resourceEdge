import { Link } from "react-router-dom"
import logo from "../../imgs/Group.svg"
import { useSelector, useDispatch } from "react-redux"
import { setLoggedIn } from "../../redux/actions/LoggedInAction"
import { loggedUser } from "../../redux/actions/userActions"

export const NavDropdown = (props) => {

    const isLoggedIn = useSelector((state) => state.isLoggedIn)

    const dispatch = useDispatch()

    const logOut = (e) => {
        e.preventDefault()
        dispatch(setLoggedIn(false))
        dispatch(loggedUser({}))
    }

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
                    <h3><Link to="/" className="link">Features</Link></h3>
                    <h3><Link to="/" className="link">About</Link></h3>
                    <p className="s-in s-in-sm">
                        { isLoggedIn ?
                            <Link className="link whyte" onClick={logOut}>Log Out</Link> :
                            <Link className="link whyte" to="/login">Log In</Link>
                        
                        }
                    </p>
                    <p className="s-in-sm"><Link className="link s-up" to="/">Sign Up</Link></p>
                </div>
            )}
        </>
    )
}