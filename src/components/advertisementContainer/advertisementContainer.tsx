import { products } from "../configs/products";
import Product from "../product/product";
import "./advertisementContainer.css";

function AdvertisementContainter() {
    return(
        <>
            <div className="advertisement-container">
                <div className="advertisement-container-header">
                    <div className="advertise-search">
                        <img className="advertise-search__img" src="/src/assets/search-icon.svg" alt="..." />
                        <input className="advertise-search__input" type="text" placeholder="Найти объявление" />
                    </div>
                    <div className="advertise-add">
                        <button className="advertise-add__button">+ Добавить</button>
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