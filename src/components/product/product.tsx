import { product } from "../configs/products";
import "./product.css";

export default function Product(props : product) {
    const {imgPath, price, productName} = props;

    return (
        <>
            <a className="product-card" href="/" onClick={(event) => {event.preventDefault()}}>
                <div className="product-info">
                    <img className="product-info__img" src={imgPath} alt="..." />
                    <span className="product-info-price__span">{price}</span>
                    <span className="product-info-name__span">{productName}</span>
                </div>
            </a>
        </>
    );
}