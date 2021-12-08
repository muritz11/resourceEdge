

export const EmailInput = (props) => {
    return (
        <>
            <label htmlFor="email"><b>Email Address</b></label><br />
                <div className="auth-input">
                    <div className="flex flex-sm">
                        <input 
                        type="email" 
                        placeholder="Enter email" id="email" 
                        value={props.email} 
                        onChange={props.handleChange} />

                        { props.emailEx ? <i className="ri-check-line ri-xl checked"></i> : `` }
                    </div>
                </div>
                { props.err ? 
                <div className="err">
                    <i className="ri-error-warning-fill"></i>
                    {props.err}
                </div> : ""
                }
                <button onClick={props.saveEmail}
                className={ props.emailEx ? "s-in auth-btn" : "auth-btn" }>Log in</button>

        </>
    )
}