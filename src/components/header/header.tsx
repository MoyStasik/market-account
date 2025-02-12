import { useContext } from "react";
import { serviceContext } from "../../App";
import "./header.css";

function Header() {
    const selectedService = useContext(serviceContext);
    
    return (
        <>
            <div className="header">
                <div className="header-user-info">
                    <div className="header-user-info__span">
                        На главную
                    </div>
                    <div className="header-user-notifications">
                        <img className="header-user-notifications__img" src="/src/assets/notification.png" alt="..." />
                    </div>
                    <div className="header-user-avatar">
                        <img className="header-user-avatar__img" src="/src/assets/default-avatar.svg" alt="..." />
                    </div>
                </div>
                <div className="service-name">
                    <span className="service-name__span">{selectedService}</span>
                </div>
            </div>
        </>
    );
}

export default Header;