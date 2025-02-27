import { useParams } from "react-router-dom";
import "./productPage.css";
import { product, products } from "../configs/products";
import { useEffect, useState } from "react";
import useCount from "../../hooks/useCount";

function ProductInfoCard() {
    const {id} = useParams();
    const product = products.find((element) => element.id === Number(id));
    if (!product) {
        return (
            <>
                 {/* вернуть страницу 404 */}
            </>
        );
    } 

    return (
        <div className="product-page">
            <div className="product-page-card-info">
                <Sidebar product={product}/>
                <div className="product-images">
                    <div className="product-current-image">
                        <img className="product-current-image__img" src={product.imgPath} alt="product-img" />
                    </div>
                </div>
                <div className="product-characteristics">
                    <div className="characteristics-header">
                        <span></span>
                        <div className="product-feedback">

                        </div>
                        <div className="product-brand">

                        </div>
                    </div>
                    <div className="characteristics-about-product">
                        <div>

                        </div>
                    </div>
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
                <div className="up-arrow" style={pickedImage === "first" ? {"opacity": "0"} : {"opacity": "1"}} onClick={() => {count.decrement()}}>
                    <div className="up-arrow-1"></div>
                    <div className="up-arrow-2"></div>
                </div>
                <img className={pickedImage === "first" ? "product-sidebar-images__img active" : "product-sidebar-images__img"} src={product.imgPath} alt="..." />
                <img className={pickedImage === "second" ? "product-sidebar-images__img active" : "product-sidebar-images__img"}  src={product.imgPath} alt="..." />
                <img className={pickedImage === "third" ? "product-sidebar-images__img active" : "product-sidebar-images__img"}  src={product.imgPath} alt="..." />
                <div className="down-arrow" style={pickedImage === "third" ? {"opacity": "0"} : {"opacity": "1"}} onClick={() => {count.increment()}}>
                    <div className="down-arrow-1"></div>
                    <div className="down-arrow-2"></div>
                </div>
            </div>
        </div>
    );
}

export default ProductInfoCard;
