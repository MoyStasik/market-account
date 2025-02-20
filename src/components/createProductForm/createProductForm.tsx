import { useState } from "react";
import Input from "../input/input";
import "./createProductForm.css";

function CreateProductForm() {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");

    const handleCreateProduct = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
    }

    return (
        <>
            <div className="product-form-container">
                <form className="product-form" action="">
                    <div className="form-content">
                        <Input type="file" placeholder="" value={""} OnChange={(e) => setProductName(e.target.value)}/>
                        <Input type="text" placeholder="Введите название товара" value={productName} OnChange={(e) => setProductName(e.target.value)}/>
                        <Input type="text" placeholder="Введите цену товара" value={productPrice} OnChange={(e) => setProductPrice(e.target.value)}/>
                        <button className="form-content__button" onClick={(event) => handleCreateProduct(event)} >Создать</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CreateProductForm;