import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { DashNavBar } from "./mini/DashNavBar";
import { Task } from "./mini/Task";

export const Dashboard = () => {

    const user = useSelector((state) => state.loggedUser[0])

    if (user) {
        return (
            <>
                <DashNavBar />
                <section className="dash-content">
                    <h1>Hello, {user.name}</h1>
                    <p>Welcome and go to have you back</p>
                    <div className="things-to-do">
                        <h3>Things to do</h3>
                        <Task 
                        task="Upload your employee performance agreement" 
                        to="Begin" />
                        <Task 
                        task="Start quarterly self review" 
                        to="Resume" />
                    </div>
                </section>
            </>
        )
    } else {
        return (<Redirect to="/login" />)
    }

}