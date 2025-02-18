import AdvertisementContainter from "../advertisementContainer/advertisementContainer";
import Header from "../header/header";
import "./content.css";
import OrderList from "../orderList/orderList";
import ServiceContext from "../../contexts/AppContext";
import { useContext, useEffect } from "react";


function Content({selectedService} : {selectedService: string}) {
    const {setSelectedService} = useContext(ServiceContext);
    useEffect(() => {
        setSelectedService(selectedService);
    }, [selectedService]);

    

    return (
        <>
            <div className="Content">
                <Header/>
                {selectedService === "Объявления" && <AdvertisementContainter />}
                {selectedService === "Заказы" && <OrderList />}
            </div>
        </>
    )
}

export default Content;