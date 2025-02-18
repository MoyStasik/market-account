import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import Content from "../components/content/content";

const router = createBrowserRouter([
    {
        element: <App />,
        children:   [
            {
                path: "/", element: < Content selectedService="Объявления"/>    
            },
            {
                path: "/orders", element: <Content selectedService="Заказы"/>    
            },
        ],
    },
]);

export default router;