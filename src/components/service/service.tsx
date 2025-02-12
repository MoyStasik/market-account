import {serviceButton} from "../configs/serviceConfigType";
import "./service.css";


function Service(props : serviceButton) {
    const {service, isActive, clickHandler} = props;
    let serviceClass = "service";
    serviceClass = (isActive === true) ? serviceClass + " active" : serviceClass;

    return (
        <>
            
                <div className={serviceClass} onClick={clickHandler}>
                    <img className="service__img" src={service.serviceImg} alt="..." />
                    <span className="service__span">{service.serviceName}</span>
                </div>
        </>
    );
}

export default Service;