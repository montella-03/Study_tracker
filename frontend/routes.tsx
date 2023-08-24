import { createBrowserRouter } from 'react-router-dom';
import AppView from "Frontend/views/AppView";


const router = createBrowserRouter([
    { path: '/', element: <AppView/>},
]);

export default router;