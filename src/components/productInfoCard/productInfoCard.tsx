import { useParams } from "react-router-dom";
import "./productInfoCard.css";
import { product, products } from "../configs/products";
import { useEffect, useState } from "react";
import useCount from "../../hooks/useCount";

function ProductInfoCard() {
    const {id} = useParams();
    const product = products.find((element) => element.id === Number(id));
    console.log("1");
    if (!product) {
        return (
            <>
                 {/* вернуть страницу 404 */}
            </>
        );
    } 

    return (
        <div className="product-info-card">
            <div className="card-info">
                <Sidebar product={product}/>
                <div className="product-images">
                    <div>
                        <img className="product-info-card__img" src={product.imgPath} alt="product-img" />
                    </div>
                </div>
                <div className="product-characteristics">

                </div>
                <div className="order-placing">

                </div>
            </div>
            <div className="product-description">

            </div>
        </div>
    );
}

function Sidebar({product} : {product: product}) {

    const [pickedImage, setPickedImage] = useState("first");
    const count = useCount(0);
    

    useEffect(() => {
        console.log(count)
        if (count.curCount % 3 === 0) {
            setPickedImage("first");
        }
        else if (count.curCount % 3 === 1) {
            setPickedImage("second");
        }
        else {
            setPickedImage("third");
        }
    }, [count])

    return (
        <div className="product-info-sidebar">
            <div className="product-sidebar-images">
                <div className="down-arrow" onClick={() => {count.increment()}}>
                    <div className="down-arrow-1"></div>
                    <div className="down-arrow-2"></div>
                </div>
                <img className={pickedImage === "first" ? "product-sidebar-images__img active" : "product-sidebar-images__img"} src={product.imgPath} alt="..." />
                <img className={pickedImage === "second" ? "product-sidebar-images__img active" : "product-sidebar-images__img"}  src={product.imgPath} alt="..." />
                <img className={pickedImage === "third" ? "product-sidebar-images__img active" : "product-sidebar-images__img"}  src={product.imgPath} alt="..." />
                <div className="up-arrow" onClick={() => {count.decrement()}}>
                    <div className="up-arrow-1"></div>
                    <div className="up-arrow-2"></div>
                </div>
            </div>
        </div>
    );
}

export default ProductInfoCard;
