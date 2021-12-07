import logo from "../../imgs/Group.svg"
import { Card } from "./Card"
import leftImage from "../../imgs/Group 43.svg"
import rightImage from "../../imgs/Group 45.svg"

export const Auth = (props) => {


    return (
        <main className="auth">
           <header className="flex flex-sm">
                <img src={logo} alt="logo" />
                <h1 className="logo">resource edge</h1>
            </header> 
            <section className="w-50 m-auto auth-card">
                <Card>
                    <h2 className="auth-heading">{props.heading}</h2>
                    <p className="auth-txt">{props.paragraph}</p>
                    {props.children}
                </Card>
            </section>
            <img src={leftImage} alt="" className="auth-image-left" />
            <img src={rightImage} alt="" className="auth-image-right" />
        </main>
    )

}