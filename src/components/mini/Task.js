import { Link } from "react-router-dom";
import emptyCircle from "../../imgs/Circle - empty.svg";

export const Task = (props) => {

    return (
        <div className="flex-sm task">
            <div><img src={emptyCircle} alt="" /></div>
            <div><p className="task-p"><small>{props.task}</small></p></div>
            <div className="txt-right">
                <Link to="/" className="link logo   ">{props.to}</Link>
            </div>
        </div>
    )
}