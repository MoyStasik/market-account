import service from "../configs/serviceConfigType";
import "./service.css";


function Service(props : service) {
    const {serviceName, serviceImg} = props;

    return (
        <>
            <div className="service">
                <img className="service__img" src={serviceImg} alt="..." />
                <span className="service__span">{serviceName}</span>
            </div>
            
        </>
    );
}

export default Service;