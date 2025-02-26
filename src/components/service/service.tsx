import {serviceButton} from "../configs/serviceConfigType";
import "./service.css";


function Service(props : serviceButton) {
    const {service} = props;

    return (
        <>
            
                <div className="service">
                    <img className="service__img" src={service.serviceImg} alt="..." />
                    <span className="service__span">{service.serviceName}</span>
                </div>
        </>
    );
}

export default Service;