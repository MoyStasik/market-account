import {useState} from "react";
import "./navbar.css";
import accountService from "../configs/accountServices";
import analyticsService from "../configs/analyticsServices";
import managerServices from "../configs/panelManagerServices";
import Service from "../service/service";

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
                {managerServices.map((item) => <Service {...item} />)}
            </div>
            <hr className="navbar-separator" />
            <div className="navbar-analytics">
                <span className="navbar-analytics__span">Аналитика</span>
                {analyticsService.map((item) => <Service {...item} />)}
            </div>
            <hr className="navbar-separator" />
            <div className="navbar-account">
                <span className="navbar-account__span">ИП Станислав Евгеньевич</span>
                {accountService.map((item) => <Service {...item} />)}
            </div>
        </div>
    )
}

export default Navbar;