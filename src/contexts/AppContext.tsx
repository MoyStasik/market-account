import { createContext } from "react";

const ServiceContext = createContext({
    selectedService: "",
    setSelectedService: (item: string) => {console.log(item)},
});

export default ServiceContext;