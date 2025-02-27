import { Link } from "react-router-dom";
import { product } from "../configs/products";
import "./product.css";

export default function Product(props : product) {
    const {id, imgPath, price, productName} = props;

    return (
        <>
            <Link className="product-card" to={`/product/${id}`}>
                <div className="product-info">
                    <img className="product-info__img" src={imgPath} alt="..." />
                    <span className="product-info-price__span">{price}</span>
                    <span className="product-info-name__span">{productName}</span>
                </div>
            </Link>
        </>
    );
}