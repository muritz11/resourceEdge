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
                    <h3>Travel & Logistics</h3>
                    <p>Make travel requests, get approvals, and have access to travel information.</p>
                </div>
                <div className="w-25">
                    <img src={email} alt="" />
                    <h3>Asset Management</h3>
                    <p>Manage the acquisition, assignment, and disposition of assets seamlessly.</p>
                </div>
            </div>
            <div className="travelnlog">
                <img src={hello} alt="travel and logistics" className="img" />
            </div>
        </div>
    )
}