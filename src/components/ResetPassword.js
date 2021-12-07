import { Auth } from "./mini/Auth"
import { Link } from "react-router-dom"

export const ResetPassword = () => {


    return (
        <>
            <Auth heading="Reset Password" paragraph="To enable us reset your password, enter email below" >
            <form>
                <label htmlFor="email"><b>Email Address</b></label><br />
                <input type="email" placeholder="Enter email" id="email" />
                {/* <button type="submit" className="s-in auth-btn">Send reset link</button> */}
                <p className="forgot"><Link to="/reset-main" className="s-in auth-btn link">Send reset link</Link></p>

                <hr />

                <p className="forgot"><Link to="/login" className="link logo">Back to login</Link></p>

            </form>
            </Auth>
        </>
    )

}