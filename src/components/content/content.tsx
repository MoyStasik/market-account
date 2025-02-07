import AdvertisementContainter from "../advertisementContainer/advertisementContainer";
import Header from "../header/header";
import "./content.css";

type contentProps = {
    selectedService: string,
};

function Content(props : contentProps) {
    return (
        <>
            <div className="Content">
                <Header selectedService={props.selectedService}/>
                <AdvertisementContainter />
            </div>
        </>
    )
}

export default Content;