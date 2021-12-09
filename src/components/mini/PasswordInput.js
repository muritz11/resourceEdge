
export const PasswordInput = (props) => {
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
                    type="password" 
                    placeholder="Enter password" 
                    id="password" 
                    value={props.password} 
                    onChange={props.handleChange} />
                    <i className="ri-eye-line ri-xl"></i>
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