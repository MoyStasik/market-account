import AdvertisementContainter from "../advertisementContainer/advertisementContainer";
import Header from "../header/header";
import "./content.css";

function Content() {


    return (
        <>
            <div className="Content">
                <Header/>
                <AdvertisementContainter />
            </div>
        </>
    )
}

export default Content;