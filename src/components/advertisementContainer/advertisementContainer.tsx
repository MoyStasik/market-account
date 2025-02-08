import { useState } from "react";
import { products } from "../configs/products";
import Product from "../product/product";
import "./advertisementContainer.css";
import Modal from "../modal/modal";

function AdvertisementContainter() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function openModal() {
        setIsModalOpen(true);
    }

    return(
        <>
            <div className="advertisement-container">
                <div className="advertisement-container-header">
                    <div className="advertise-search">
                        <img className="advertise-search__img" src="/src/assets/search-icon.svg" alt="..." />
                        <input className="advertise-search__input" type="text" placeholder="Найти объявление" />
                    </div>
                    <div className="advertise-add">
                        <button className="advertise-add__button" onClick={openModal}>+ Добавить</button>
                        <Modal open={isModalOpen}>
                            <div>
                                sadadqweqwe
                            </div>
                        </Modal>
                    </div>
                </div>
                <div className="advertisement-container-products">
                    {products.map((item) => <Product key={item.id} {...item} />)}
                </div>
            </div>
        </>
    );
};

export default AdvertisementContainter;