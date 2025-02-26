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
    const [productImg, setProductImg] = useState("");
    const [inputImgErrorMessage, setInputImgErrorMessage] = useState("");
    const [drop, setDrop] = useState(false);
    

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
        setProductImg("");
        setInputImgErrorMessage("");
        console.log("success");
    }

    const addProductImages = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const file = event.target.files[0];
            const maxFileSize = 10 * 1024 * 1024;
            if (file.size > maxFileSize) {
                setInputImgErrorMessage("Размер файла не должен превышать 10МБ");
                return;
            }
            setInputImgErrorMessage("");
            setProductImg(URL.createObjectURL(event.target.files[0]));
        }
    }

    const handleDeleteUpload = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        event.stopPropagation();
        setProductImg("");
    }

    const onDragLeave = (e: React.DragEvent<HTMLElement>) => {
        e.preventDefault();
        setDrop(false);
    };
    
    const onDragOver = (e: React.DragEvent<HTMLElement>) => {
        e.preventDefault();
        setDrop(true);
    };
    
    const handleDrop = (e: React.DragEvent<HTMLElement>) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        setDrop(false);
        
        setProductImg(URL.createObjectURL(droppedFile));
    };

    return (
        <>
            <div className="product-form-container" onDrop={handleDrop} onDragOver={onDragOver} onDragLeave={onDragLeave}>
                <form className="product-form" action="">
                    <div className="form-content">
                        <div className="img-error">
                            <span className="img-error__span">{inputImgErrorMessage}</span>
                        </div>
                        <div className="product-upload-cancel" style={productImg === "" ? {"display": "none"} : {}}>
                            <img className="product-upload-cancel__img" src="/src/assets/cancel.svg" alt="cancel-img" onClick={(event) => handleDeleteUpload(event)}/>
                        </div>
                        <label className="img-upload-label" htmlFor="file-input">
                            <input id="file-input" type="file" placeholder="" value={""} accept="image/webp, image/gif, image/jpeg, image/webp, image/png" style={{"display": "none"}} onChange={(event: React.ChangeEvent<HTMLInputElement>) => addProductImages(event)}></input>
                            <div className="empty-input" style={productImg !== "" ? {"display": "none"} : {}}>
                                <span className="empty-input__span">Добавьте фото</span>
                            </div>
                            <div className="product-upload-picture" style={productImg === "" ? {"display": "none"} : {}} >
                                <img className="file-input__img" src={productImg} alt="poduct-image"/>
                            </div>
                        </label>
                        <div className="error-div">
                            <span className="error-product-name__span">{productNameValidationMessage}</span>
                        </div>
                        <Input type="text" placeholder="Введите название товара" value={productName} OnChange={(e) => setProductName(e.target.value)}/>
                        <div className="error-div">
                            <span className="error-price__span">{productPriceValidationMessage}</span>
                        </div>
                        <Input type="text" placeholder="Введите цену товара" value={productPrice} OnChange={(e) => setProductPrice(e.target.value)}/>
                        <button className="form-content__button" onClick={(event) => handleCreateProduct(event)} >Создать</button>
                        {drop && 
                            <div className="drop">
                                <div className="upload-icon">
                                    <img className="upload-icon__img" src="/src/assets/upload-icon.png" alt="..." />
                                </div>
                            </div>
                        }
                    </div>
                </form>
            </div>
        </>
    );
}

export default CreateProductForm;