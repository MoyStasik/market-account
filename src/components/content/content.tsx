import AdvertisementContainter from "../advertisementContainer/advertisementContainer";
import Header from "../header/header";
import "./content.css";
import OrderList from "../orderList/orderList";
import Settings from "../settings/settings";


function Content({selectedService} : {selectedService: string}) {

    return (
        <>
            <div className="Content">
                <Header selectedService={selectedService}/>
                {selectedService === "Объявления" && <AdvertisementContainter />}
                {selectedService === "Заказы" && <OrderList />}
                {selectedService === "Настройки" && <Settings />}
            </div>
        </>
    )
}

export default Content;