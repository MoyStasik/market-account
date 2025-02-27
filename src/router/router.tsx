import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import Content from "../components/content/content";
import ProductInfoCard from "../components/productPage/productPage";

const router = createBrowserRouter([
    {
        element: <App />,
        children:   [
            {
                path: "/", element: <Content selectedService="Объявления"/>    
            },
            {
                path: "/orders", element: <Content selectedService="Заказы"/>    
            },
            {
                path: "/rating", element: <Content selectedService="Рейтинг"/>    
            },
            {
                path: "/forwarding", element: <Content selectedService="Продвижение"/>    
            },
            {
                path: "/finance", element: <Content selectedService="Финансы"/>    
            },
            {
                path: "/reviews", element: <Content selectedService="Отзывы"/>    
            },
            {
                path: "/settings", element: <Content selectedService="Настройки"/>    
            },
            {
                path: "/support", element: <Content selectedService="Поддержка"/>    
            },
            {
                path: "/product/:id", element: <ProductInfoCard />
            },
        ],
    },
]);

export default router;