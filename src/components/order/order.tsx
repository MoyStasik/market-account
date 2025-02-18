import { order } from "../configs/ordersConfig";
import "./order.css";

function Order(props: order) {
    const {id, price, orderDate, deliveryDate} = props;

    return (
        <>
            <div id={`order-${id}`} className="order" onClick={( event) => {event.preventDefault()}}>
                <div className="order-info">
                    <span>Заказ от {orderDate.getDate()} февраля {orderDate.getFullYear()} г.</span>
                    <span>Доставим {deliveryDate.getDate()} февраля {deliveryDate.getFullYear()}  г.</span>
                    <span>Стоимость: {price}Р</span>
                </div>
                <div className="order-img">
                    <img className="order-img__img" src="/src/assets/boots.jpeg" alt="..." />
                </div>
            </div>
        </>
    );
}

export default Order;