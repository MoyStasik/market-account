import { useContext } from "react";
import AdvertisementContainter from "../advertisementContainer/advertisementContainer";
import Header from "../header/header";
import "./content.css";
import { serviceContext } from "../../App";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from 'react-router-dom';


function Content() {
    const selectedService = useContext(serviceContext);

    return (
        <>
            <div className="Content">
                <Header/>
                {/* <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<AdvertisementContainter />}/>
                    </Routes>
                </BrowserRouter> */}
                {selectedService === "Объявления" && <AdvertisementContainter />}
            </div>
        </>
    )
}

export default Content;