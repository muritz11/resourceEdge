import bannerImg from "../../imgs/Artwork@2x.svg";

export const Banner = () => {


    return (
        <div className="banner flex">
            <div className="banner-txt">
                <h1>
                    Throw paperwork <br />
                    into the trash where <br />
                    it belongs.
                </h1>
                <p>
                    Eliminate the hassle involved in managing <br />people operations by automating it.
                </p>
            </div>
            <div>
                <img src={bannerImg} className="img" alt="relaxed" />
            </div>
        </div>
    )
}