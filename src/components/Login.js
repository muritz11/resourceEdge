import { Auth } from "./mini/Auth"
import { Link } from "react-router-dom"

export const Login = () => {


    return (
        <>
            <Auth heading="Log in" paragraph="Access your resource edge account" >
            <form>
                <label htmlFor="email"><b>Email Address</b></label><br />
                <input type="email" placeholder="Enter email" id="email" />
                <button type="submit" className="s-in auth-btn">Log in</button>

                <hr />

                <p className="forgot"><Link to="/" className="link logo">Forgot password?</Link></p>

            </form>
            </Auth>
        </>
    )

}