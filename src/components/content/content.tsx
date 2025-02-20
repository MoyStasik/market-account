import AdvertisementContainter from "../advertisementContainer/advertisementContainer";
import Header from "../header/header";
import "./content.css";
import OrderList from "../orderList/orderList";
import ServiceContext from "../../contexts/AppContext";
import { useContext, useEffect } from "react";
import Settings from "../settings/settings";


function Content({selectedService} : {selectedService: string}) {
    const {setSelectedService} = useContext(ServiceContext);
    useEffect(() => {
        setSelectedService(selectedService);
    }, [selectedService, setSelectedService]);

    

    return (
        <>
            <div className="Content">
                <Header/>
                {selectedService === "Объявления" && <AdvertisementContainter />}
                {selectedService === "Заказы" && <OrderList />}
                {selectedService === "Настройки" && <Settings />}
            </div>
        </>
    )
}

export default Content;