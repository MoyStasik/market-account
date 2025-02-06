import {useState} from "react";
import "./navbar.css";

function Navbar() {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <div className="navbar">
            <div className="navbar-header">
                <img className="navbar-header__img" src="/src/assets/Patefon.svg" alt="logo" />
                <span className="navbar-header__span">Patefon</span>
            </div>
            <div className="navbar-manager">
                <span className="navbar-manager__span">Панель управления</span>
                <div className="manager-advertisements">
                    <img src="" alt="..." />
                    <span className="manager-advertisements__span">Объявления</span>
                </div>
                <div className="manager-orders">
                    <img src="" alt="..." />
                    <span className="manager-orders__span">Заказы</span>
                </div>
            </div>
            <hr className="navbar-separator" />
            <div className="navbar-analytics">
                <span className="navbar-analytics__span">Аналитика</span>
                <div className="navbar-rating">
                    <img src="" alt="..." />
                    <span className="navbar-rating__span">Рейтинг</span>
                </div>
                <div className="navbar-forwarding">
                    <img src="" alt="..." />
                    <span className="navbar-forwarding__span">Продвижение</span>
                </div>
                <div className="navbar-money">
                    <img src="" alt="..." />
                    <span className="navbar-money__span">Финансы</span>
                </div>
                <div className="navbar-feedback">
                    <img src="" alt="..." />
                    <span className="navbar-feedback__span">Отзывы</span>
                </div>
            </div>
            <hr className="navbar-separator" />
            <div className="navbar-account">
                <span className="navbar-account__span">ИП Станислав Евгеньевич</span>
                <div className="navbar-settings">
                    <img className="navbar-settings__img" src="/src/assets/settings.svg" alt="..." />
                    <span className="navbar-settings__span">Настройки</span>
                </div>
                <div className="navbar-support">
                    <img className="navbar-support__img" src="/src/assets/Contacts.svg" alt="..." />
                    <span className="navbar-support__span">Поддержка</span>
                </div>
                <div className="navbar-out">
                    <img className="navbar-out__img" src="/src/assets/IconLogout.svg" alt="..." />
                    <span className="navbar-out__span">Выйти</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;