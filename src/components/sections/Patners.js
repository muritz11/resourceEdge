import unn from "../../imgs/image 7.svg";
import tenece from "../../imgs/image 6.svg";
import pe from "../../imgs/image 9.svg";
import genesys from "../../imgs/image 10.svg";

export const Patners = () => {

    return (
        <div className="y-padding">
            <div className="flex AnL patners">
                <div className="flex">
                    <div className="p-img">
                        <img src={unn} alt="travel and logistics" />
                    </div>
                    <div className="p-img">
                        <img src={tenece} alt="travel and logistics" />
                    </div>
                </div>
                <div className="flex">
                    <div className="p-img">
                        <img src={pe} alt="travel and logistics" />
                    </div>
                    <div className="p-img">
                        <img src={genesys} alt="travel and logistics" />
                    </div>
                </div>
            </div>
        </div>
    )
}