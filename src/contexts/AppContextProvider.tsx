import { useState } from "react";
import ServiceContext from "./AppContext";

const ServiceProvider = ({children}) => {
    const [selectedService, setSelectedService] = useState("Объявления");

    return (
        <ServiceContext.Provider value={{selectedService, setSelectedService}} >
            {children}
        </ServiceContext.Provider>
    );
}

export default ServiceProvider;