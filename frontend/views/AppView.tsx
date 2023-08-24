import React from 'react';
import { AppLayout } from '@hilla/react-components/AppLayout.js';
import '@vaadin/icons';
import Header from "Frontend/components/Header";
import Navbar from "Frontend/components/Navbar";


const AppView=()=> {
    return (
        <AppLayout primarySection="drawer" className={"p-m"}>
            <Header/>
            <Navbar/>
        </AppLayout>

    );
}

export default AppView;

