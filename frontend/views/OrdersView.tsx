import MainLayout from "Frontend/views/Layouts/MainLayout";
import Navbar from "Frontend/components/Navbar";

const topics = ["All", "Pending", "Completed", "Cancelled"];
const OrdersView = () => {
    return (
        <MainLayout>
            <Navbar title={"Orders"} topics={topics}/>
        </MainLayout>
    )
}
export default OrdersView;