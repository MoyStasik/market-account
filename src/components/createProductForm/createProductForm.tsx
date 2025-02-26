import { useContext, useState } from "react";
import Input from "../input/input";
import "./createProductForm.css";
import validatePrice from "../../validation/productPrice";
import { ModalContext } from "../modal/modal";

function CreateProductForm() {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productNameValidationMessage, setProductNameValidationMessage] = useState("");
    const [productPriceValidationMessage, setProductPriceValidationMessage] = useState("");
    const closeModal = useContext(ModalContext);
    

    const handleCreateProduct = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        let errorFlag = false;
        if (!productName.trim()) {
            setProductNameValidationMessage("Введите название товара");
            errorFlag = true;
        } 
        else {
            setProductNameValidationMessage("");
        }

        if (!validatePrice(productPrice.trim())) {
            setProductPriceValidationMessage("Введите цену продукта в рублях, без указания знака валюты");
            errorFlag = true;
        }
        else {
            setProductPriceValidationMessage("");
        }

        if (errorFlag) {
            return;
        }
        
        closeModal();
        setProductName("");
        setProductPrice("");
        console.log("success");
    }

    return (
        <>
            <div className="product-form-container">
                <form className="product-form" action="">
                    <div className="form-content">
                        <div className="error-div">
                            <span className="error-file__span">{}</span>
                        </div>
                        <Input type="file" placeholder="" value={""} OnChange={(e) => setProductName(e.target.value)}/>
                        <div className="error-div">
                            <span className="error-product-name__span">{productNameValidationMessage}</span>
                        </div>
                        <Input type="text" placeholder="Введите название товара" value={productName} OnChange={(e) => setProductName(e.target.value)}/>
                        <div className="error-div">
                            <span className="error-price__span">{productPriceValidationMessage}</span>
                        </div>
                        <Input type="text" placeholder="Введите цену товара" value={productPrice} OnChange={(e) => setProductPrice(e.target.value)}/>
                        <button className="form-content__button" onClick={(event) => handleCreateProduct(event)} >Создать</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CreateProductForm;