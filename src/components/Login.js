import { Auth } from "./mini/Auth"
import { Link, Redirect } from "react-router-dom"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { EmailInput } from "./mini/EmailInput"
import { PasswordInput } from "./mini/PasswordInput"
import { useDispatch } from "react-redux"
import { setLoggedIn } from "../redux/actions/LoggedInAction"
import { loggedUser } from "../redux/actions/userActions"

export const Login = () => {

    const [email, setEmail] = useState('')
    const [emailExist, setEmailExist] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [renderPwd, setRenderPwd] = useState(false)
    const [redir, setRedir] = useState(false)
    const dispatch = useDispatch()

    const users = useSelector((state) => state.allUsers.users)
    


    useEffect(() => {
        const emailEx = users.filter((value) => {
            return value.email === email
        })

        setEmailExist(emailEx)
    }, [users, email])

    // console.log(emailExist)

    function errFunc(msg) {
        setErrMsg(msg);
        setTimeout(() => {
            setErrMsg(null);
        }, 5000);
    }

    let handleInput = (e) => {
        switch (e.target.id) {
            case 'email':
            setEmail(e.target.value);
            break;
            
            case 'password':
            setPassword(e.target.value);
            break;

            default:
            alert('sorry, unknown field');
            break;
        }
    }


    let handleEmailSubmit = (e) => {
        e.preventDefault();
        if (email !== '') {
            if (emailExist.length) {
                setRenderPwd(true)
            } else {
                errFunc('Email does not exist');
            }
        } else {
            errFunc('Email is empty');
        }
    }
    
    let handlePasswordSubmit = (e) => {
        e.preventDefault();
        dispatch(setLoggedIn(true))
        dispatch(loggedUser(emailExist))
        setRedir(true)
    }
    

    if (redir) {
        return <Redirect to="/dashboard" />
    } else {
        return (
            <>
                <Auth heading="Log in" paragraph="Access your resource edge account" >
                <form>
                    { !renderPwd ?
                    <EmailInput 
                    email={email}
                    handleChange={handleInput}
                    emailEx={emailExist.length}
                    err={errMsg}
                    saveEmail={handleEmailSubmit} /> : ""
                    }
                    
                    { renderPwd ?
                    <PasswordInput 
                    password={password}
                    handleChange={handleInput}
                    err={errMsg}
                    user={emailExist[0]}
                    login={handlePasswordSubmit} /> : ""
                    }

                    <hr />

                    <p className="forgot"><Link to="/reset" className="link logo">Forgot password?</Link></p>

                </form>
                </Auth>
            </>
        )
    }

}