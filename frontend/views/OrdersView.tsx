import MainLayout from "Frontend/views/Layouts/MainLayout";
import Navbar from "Frontend/components/Navbar";
import React from "react";
import {Notification} from "@hilla/react-components/Notification";

const topics = ["All", "Pending", "Completed", "Cancelled"];
const OrdersView = () => {

    return (
        <MainLayout>
            <Navbar title={"Orders"} topics={topics} handleClick={()=>{}}/>
        </MainLayout>
    )
}
export default OrdersView;