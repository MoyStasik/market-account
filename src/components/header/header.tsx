import "./header.css";
import { Link } from "react-router-dom";

function Header({selectedService} : {selectedService: string} ) {

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
                        <Link to="/settings">
                            <img className="header-user-avatar__img" src="/src/assets/hameleon.jpeg" alt="..." />
                        </Link>
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