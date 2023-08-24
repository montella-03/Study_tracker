import { createBrowserRouter } from 'react-router-dom';
import OrdersView from "Frontend/views/OrdersView";
import MainLayout from "Frontend/views/Layouts/MainLayout";



const router = createBrowserRouter([
    { path: '/', element: <MainLayout/>},
    { path: '/orders', element: <OrdersView/>},
]);

export default router;