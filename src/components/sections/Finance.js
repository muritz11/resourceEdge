import list from "../../imgs/Group 19838 (1).svg";
import email from "../../imgs/Group 19838 (2).svg";
import hello from "../../imgs/Hello 1.svg";

export const Finance = () => {

    return (
        <div className="y-padding">
            <div className="flex AnL">
                <div className="w-50">
                    <h1>Finance</h1>
                    <p>Generate invoices, track expenditure, and manage complex payrolls for<br />multiple teams and companies</p>
                </div>
                <div className="w-25">
                    <img src={list} alt="" />
                    <h3>RE Vouchers</h3>
                    <p>Track and manage expenditure for multiple teams across your organisation using Resource Edge Vouchers.</p>
                </div>
                <div className="w-25">
                    <img src={email} alt="" />
                    <h3>Payroll</h3>
                    <p>Our easy to use systems takes away the pain of managing complex payrolls for organisations of all sizes.</p>
                </div>
            </div>
            <div className="travelnlog">
                <img src={hello} alt="travel and logistics" className="img" />
            </div>
        </div>
    )
}