import { Auth } from "./mini/Auth"
import { Link } from "react-router-dom"

export const ResetMain = () => {


    return (
        <>
            <Auth heading="Reset Password" paragraph="The password must be atleast 6 characters" >
            <form>
                <label htmlFor="email"><b>New Password</b></label><br />
                <input type="email" placeholder="Enter password" id="email" />
                <label htmlFor="email"><b>Confirm Password</b></label><br />
                <input type="email" placeholder="Confirm password" id="email" />

                <button type="submit" className="s-in auth-btn">Save</button>

                <hr />

                <p className="forgot"><Link to="/login" className="link logo">Back to login</Link></p>

            </form>
            </Auth>
        </>
    )

}