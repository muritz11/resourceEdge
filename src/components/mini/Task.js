import { Link } from "react-router-dom";
import emptyCircle from "../../imgs/Circle - empty.svg";

export const Task = (props) => {

    return (
        <div className="flex-sm task">
            <img src={emptyCircle} alt="" />
            <p>{props.task}</p>
            <Link to="/" className="link txt-right">{props.to}</Link>
        </div>
    )
}