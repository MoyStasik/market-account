import Order from "../order/order";
import "./orderList.css";
import {Orders} from "../configs/ordersConfig";

function OrderList() {
    return (
        <>
            <div className="order-list">
                {Orders.map((item) => <Order key={item.id} {...item} />)}
            </div>
        </>
    );
}

export default OrderList;