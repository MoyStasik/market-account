// import {Dispatch, SetStateAction, useState} from "react";
import "./navbar.css";
import accountService from "../configs/accountServices";
import analyticsService from "../configs/analyticsServices";
import managerServices from "../configs/panelManagerServices";
import Service from "../service/service";
import { useContext } from "react";
import { serviceContext } from "../../App";

type navigationProps = {
    setSelectedService: (itemName : string) => void;
}

function Navbar(props : navigationProps) {
    const {setSelectedService} = props;
    const selectedService = useContext(serviceContext);

    function handleClickBtn(serviceName : string) {
        setSelectedService(serviceName);
        console.log(serviceName);
    }

    return (
        <div className="navbar">
            <div className="navbar-header">
                <span className="navbar-header__span">Patefon</span>
            </div>
            <div className="navbar-manager" >
                <span className="navbar-manager__span">Панель управления</span>
                {managerServices.map((item) => <Service key={item.serviceName}  clickHandler={() => handleClickBtn(item.serviceName)} service={item} isActive={item.serviceName === selectedService}/>)}
            </div>
            <hr className="navbar-separator" />
            <div className="navbar-analytics">
                <span className="navbar-analytics__span">Аналитика</span>
                {analyticsService.map((item) => <Service key={item.serviceName}  clickHandler={() => handleClickBtn(item.serviceName)} service={item} isActive={item.serviceName === selectedService}/>)}
            </div>
            <div className="navbar-section-end">
                <div className="navbar-account">
                    <span className="navbar-account__span">ИП Станислав Евгеньевич</span>
                    {accountService.map((item) => <Service key={item.serviceName}  clickHandler={() => handleClickBtn(item.serviceName)} service={item} isActive={item.serviceName === selectedService}/>)}
                </div>
            </div>
        </div>
    )
}

export default Navbar;