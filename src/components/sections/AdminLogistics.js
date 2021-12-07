import paperplane from "../../imgs/Group 19837.svg";
import briefcase from "../../imgs/Group 19838.svg";
import travelnlog from "../../imgs/Direct Reports - List (1).svg";

export const AdminLogistics = () => {

    return (
        <div className="y-padding">
            <div className="flex AnL">
                <div className="w-50">
                    <h1>Admin and Logistics</h1>
                    <p>Manage and track company assets as well as logistics for  <br />travelling employees</p>
                </div>
                <div className="w-25">
                    <img src={paperplane} alt="" />
                    <h3>Travel & Logistics</h3>
                    <p>Make travel requests, get approvals, and have access to travel information.</p>
                </div>
                <div className="w-25">
                    <img src={briefcase} alt="" />
                    <h3>Asset Management</h3>
                    <p>Manage the acquisition, assignment, and disposition of assets seamlessly.</p>
                </div>
            </div>
            <div className="travelnlog">
                <img src={travelnlog} alt="travel and logistics" className="img" />
            </div>
        </div>
    )
}