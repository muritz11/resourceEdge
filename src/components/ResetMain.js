import { Auth } from "./mini/Auth"
import { Link } from "react-router-dom"
import { useState } from "react"
import { Check } from "./mini/Check"

export const ResetMain = () => {

    const [errMsg, setErrMsg] = useState('')
    const [errMsg2, setErrMsg2] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPwd, setConfirmPwd] = useState('')
    const [rendCheck, setCheck] = useState(false)

    let errFunc = (msg) => {
        setErrMsg(msg);
        setTimeout(() => {
            setErrMsg(null);
        }, 5000);
    }
    let errFunc2 = (msg) => {
        setErrMsg2(msg);
        setTimeout(() => {
            setErrMsg2(null);
        }, 5000);
    }


    let handleInput = (e) => {
        switch (e.target.id) {
            case 'password':
            setPassword(e.target.value);
            break;
            
            case 'confirmPwd':
            setConfirmPwd(e.target.value);
            break;

            default:
            alert('sorry, unknown field');
            break;
        }
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        if (password !== '') {
            if (password.length >= 6) {
                if (confirmPwd !== '') {
                    if (password === confirmPwd) {
                        setCheck(true)
                    } else {
                        errFunc2('Passwords do not match')
                    }
                } else {
                    errFunc2('Enter password')
                }
            } else {
                errFunc2('Password is not upto 6 characters ')
            }
        } else {
            errFunc('Enter password');
        }
    }


    return (
        <>
            <Auth 
            heading="Reset Password" 
            paragraph={ !rendCheck ? "The password should have atleast 6 characters" : "" } >
            <form onSubmit={handleSubmit}>
                { !rendCheck ? 
                <>
                    <label htmlFor="email"><b>New Password</b></label><br />
                    <div className="auth-input">
                        <input type="password" placeholder="Enter password" onChange={handleInput} id="password" />
                    </div>
                    { errMsg ? 
                    <div className="err">
                        <i className="ri-error-warning-fill"></i>
                        {errMsg}
                    </div> : ""
                    }
                    
                    <label htmlFor="email"><b>Confirm Password</b></label><br />
                    <div className="auth-input">
                        <input type="password" placeholder="Confirm password" onChange={handleInput} id="confirmPwd" />
                    </div>
                    { errMsg2 ? 
                    <div className="err">
                        <i className="ri-error-warning-fill"></i>
                        {errMsg2}
                    </div> : ""
                    }
                    <button type="submit" className="s-in auth-btn">Save</button>
                </> : 
                <Check 
                paragraph="Your password has been changed successfully."
                />
                }

                <hr />

                <p className="forgot"><Link to="/login" className="link logo">Back to login</Link></p>

            </form>
            </Auth>
        </>
    )

}