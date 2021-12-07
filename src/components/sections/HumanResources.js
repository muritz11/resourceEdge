import team from "../../imgs/Group 6.svg";
import mountain from "../../imgs/Group 7.svg";
import calendar from "../../imgs/Group 7 (1).svg";
import employee_dir from "../../imgs/Frame 19864.svg";
import { Card } from "../mini/Card";

export const HumanResources = () => {

    return (
        <section className="hr home-container">
            <div>
                <h1>Human Resources</h1>
                <p>Onboard new employees, manage the employee lifecycle <br /> and measure employee performance.</p>
            </div>
            <div className="cards flex">
              <Card>
                <img src={team} alt="" />
                <h3>Employee Management</h3>
                <p>From Hiring & Onboarding to Retiring, the Resource Edge Employee Management module eliminates all the complexities & paperwork involved in managing your team.</p>
              </Card>
              <Card>
                <img src={mountain} alt="" />
                <h3>Employee Management</h3>
                <p>From Hiring & Onboarding to Retiring, the Resource Edge Employee Management module eliminates all the complexities & paperwork involved in managing your team.</p>
              </Card>
              <Card>
                <img src={calendar} alt="" />
                <h3>Employee Management</h3>
                <p>From Hiring & Onboarding to Retiring, the Resource Edge Employee Management module eliminates all the complexities & paperwork involved in managing your team.</p>
              </Card>
            </div>
            <div className="employee-dir">
                <img src={employee_dir} alt="" />
            </div>
        </section>
    )
}