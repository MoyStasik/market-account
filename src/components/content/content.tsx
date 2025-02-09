import { useContext } from "react";
import AdvertisementContainter from "../advertisementContainer/advertisementContainer";
import Header from "../header/header";
import "./content.css";
import { serviceContext } from "../../App";

function Content() {
    const selectedService = useContext(serviceContext);

    return (
        <>
            <div className="Content">
                <Header/>
                {selectedService === "Объявления" && <AdvertisementContainter />}
            </div>
        </>
    )
}

export default Content;