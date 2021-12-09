import check from "../../imgs/check-circle-outline.svg"

export const Check = (props) => {
    return (
        <div className="check">
            <img src={check} alt="check" />
            <p>{props.paragraph}</p>
        </div>
    )
}