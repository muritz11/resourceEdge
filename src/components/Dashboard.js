import { DashNavBar } from "./mini/DashNavBar";
import { Task } from "./mini/Task";

export const Dashboard = () => {

    return (
        <>
            <DashNavBar />
            <section className="dash-content">
                <h1>Hello, Ositadinma Nwangwu</h1>
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
}