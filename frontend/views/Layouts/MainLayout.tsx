import React from 'react';
import { AppLayout } from '@hilla/react-components/AppLayout.js';
import '@vaadin/icons';
import Header from "Frontend/components/Header";


interface Children {
    children?: React.ReactNode;
}

const MainLayout=({children}:Children)=> {
    return (
        <AppLayout primarySection="drawer" className={"p-m"}>
            <Header/>
            {children}
        </AppLayout>

    );
}

export default MainLayout;

