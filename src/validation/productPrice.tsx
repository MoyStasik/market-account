const regExp = /^\d+$/;

const validatePrice = (productPrice : string) => {
    if (productPrice.match(regExp)) {
        return true;
    }
    return false;
}

export default validatePrice;