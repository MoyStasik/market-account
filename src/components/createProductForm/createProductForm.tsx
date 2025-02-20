import Input from "../input/input";
import "./createProductForm.css";

function CreateProductForm() {
    const handleCreateProduct = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
    }

    return (
        <>
            <div className="product-form-container">
                <form className="product-form" action="">
                    <div className="form-content">
                        <Input type="file" placeholder="" />
                        <Input type="text" placeholder="Введите название товара" />
                        <Input type="text" placeholder="Введите цену товара" />
                        <button className="form-content__button" onClick={(event) => handleCreateProduct(event)}>Создать</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CreateProductForm;