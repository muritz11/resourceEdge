import { Auth } from "./mini/Auth"
import { Link, Redirect } from "react-router-dom"
import { useState } from "react"
import { Check } from "./mini/Check"

export const ResetPassword = () => {

    const [errMsg, setErrMsg] = useState('')
    const [email, setEmail] = useState('')
    const [redir, setRedir] = useState(false)
    const [rendCheck, setCheck] = useState(false)

    let errFunc = (msg) => {
        setErrMsg(msg);
        setTimeout(() => {
            setErrMsg(null);
        }, 5000);
    }


    let handleChange = (e) => {
        setEmail(e.target.value);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        if (email !== '') {
            setCheck(true)
            setTimeout(() => {
                setRedir(true)
            }, 5000)
        } else {
            errFunc('Enter email address');
        }
    }
    
    if (redir) {
        return <Redirect to="reset-main" />
    } else {
        return (
            <>
                <Auth 
                heading="Reset Password" 
                paragraph={ !rendCheck ? "To enable us reset your password, enter email below" : "" } >
                <form onSubmit={handleSubmit}>
                    { !rendCheck ? 
                    <>
                        <label htmlFor="email"><b>Email Address</b></label><br />
                        <div className="auth-input">
                            <input 
                            type="email" 
                            placeholder="Enter email" 
                            id="email" 
                            value={email} 
                            onChange={handleChange} />
                        </div>
                        { errMsg ? 
                        <div className="err">
                            <i className="ri-error-warning-fill"></i>
                            {errMsg}
                        </div> : ""
                        }
                        <button type="submit" className={email ? "s-in auth-btn" : "auth-btn" } >Send reset link</button>
                    </> : 
                    <Check 
                    paragraph="A recovery email has been sent to your email address."
                    /> 
                    }
    
                    <hr />
    
                    <p className="forgot"><Link to="/login" className="link logo">Back to login</Link></p>
    
                </form>
                </Auth>
            </>
        )
    }


}