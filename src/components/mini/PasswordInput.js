import { useState } from "react"

export const PasswordInput = (props) => {

    const [showPwd, setShowPwd] = useState(false)

    const inputType = showPwd ? "text" : "password"
    const icon = showPwd ? "ri-eye-off-line ri-lg" : "ri-eye-line ri-lg"

    const handleShowPwd = () => {
        setShowPwd(!showPwd)
    }

    return (
        <>
            <div className="auth-user-detail flex-sm">
                <div>
                    <h2>{props.user.name}</h2>
                    <p>{props.user.email}</p>
                </div>
                <div>
                    <i className="ri-pencil-fill ri-2x pencil"></i>
                </div>
            </div>

            <label htmlFor="email"><b>Password</b></label><br />
            <div className="auth-input">
                <div className="flex flex-sm">
                    <input 
                    type={inputType} 
                    placeholder="Enter password" 
                    id="password" 
                    value={props.password} 
                    onChange={props.handleChange} />
                    <i className={icon} onClick={handleShowPwd}></i>
                </div>
            </div>
            { props.err ? 
            <div className="err">
                <i className="ri-error-warning-fill"></i>
                {props.err}
            </div> : ""
            }

            <button
            className="s-in auth-btn" onClick={props.login}>Log in</button>
        </>
    )
}