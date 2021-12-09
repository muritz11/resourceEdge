import { Link } from "react-router-dom"
import { useState } from "react"
import employee from "../../imgs/Employee.svg"
import manager from "../../imgs/Talent Manager.svg"
import { useDispatch } from "react-redux"
import { setLoggedIn } from "../../redux/actions/LoggedInAction"
import { loggedUser } from "../../redux/actions/userActions"


export const DashDropdown = (props) => {

    const [role, setRole] = useState('employee')

    const selTm = () => {
        setRole('talent')
    }

    const selEmployee = () => {
        setRole('employee')
    }

    const dispatch = useDispatch()

    const logOut = (e) => {
        e.preventDefault()
        dispatch(setLoggedIn(false))
        dispatch(loggedUser({}))
    }


    return (
        <div className="dash-nav-dropdown">
            <div className="header mb-parent pad">
                <h4 className="grey mb-sibling">{props.name}</h4>
                <p className="mb-sibling">Profile</p>
            </div>
            <div className="nav-content mb-parent pad">
                <h5 className="grey mb-sibling">Use resource edge as</h5>
                {/* ticked */}
                { role === "employee" ?
                <div className="role flex-sm mb-sibling">
                    <img src={employee} alt="" />
                    <p>Employee</p>
                    <i className="ri-check-fill ri-lg"></i>
                </div> : 
                <div className="role flex-sm mb-sibling">
                <img src={manager} alt="" />
                <p>Talent Manager</p>

                <i className="ri-check-fill ri-lg"></i>
                </div>
                }
                {/* not ticked */}
                { role !== "employee" ?
                <div className="role flex-sm mb-sibling" onClick={selEmployee}>
                    <img src={employee} alt="" />
                    <p>Employee</p>
                </div> : 
                <div className="role flex-sm mb-sibling" onClick={selTm}>
                <img src={manager} alt="" />
                <p>Talent Manager</p>
                </div>
                }
            </div>
            <hr />
            <div className="pad">
                <Link onClick={logOut} className="link">Log Out</Link>
            </div>
            
        </div>
    )
}