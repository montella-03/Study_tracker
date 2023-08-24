import React from 'react'
import {h1Style, iconStyle} from "Frontend/constants/Styles";
import {Tabs} from "@hilla/react-components/Tabs";
import {Tab} from "@hilla/react-components/Tab";
import {Icon} from "@hilla/react-components/Icon";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const navigation=()=> {
        navigate('/orders');
    }

    return (
    <>
        <h1 slot="drawer" style={h1Style}>
            StudyPlanz
        </h1>

        <Tabs slot="drawer" selected={1} orientation="vertical">
            <Tab>
                <a tabIndex={-1}>
                    <Icon icon="vaadin:dashboard" style={iconStyle} />
                    <span>Dashboard</span>
                </a>
            </Tab>

            <Tab>
                <a tabIndex={-1}>
                    <Icon icon="vaadin:cart" style={iconStyle} />
                    <span onClick={navigation}>Orders</span>
                </a>
            </Tab>
            {/* end::snippet[] */}
            <Tab>
                <a tabIndex={-1}>
                    <Icon icon="vaadin:user-heart" style={iconStyle} />
                    <span>Customers</span>
                </a>
            </Tab>
            <Tab>
                <a tabIndex={-1}>
                    <Icon icon="vaadin:package" style={iconStyle} />
                    <span>Products</span>
                </a>
            </Tab>
            <Tab>
                <a tabIndex={-1}>
                    <Icon icon="vaadin:records" style={iconStyle} />
                    <span>Documents</span>
                </a>
            </Tab>
            <Tab>
                <a tabIndex={-1}>
                    <Icon icon="vaadin:list" style={iconStyle} />
                    <span>Tasks</span>
                </a>
            </Tab>
            <Tab>
                <a tabIndex={-1}>
                    <Icon icon="vaadin:calendar" style={iconStyle} />
                    <span>Calendar</span>
                </a>
            </Tab>
            <Tab>
                <a tabIndex={-1}>
                    <Icon icon="vaadin:chart" style={iconStyle} />
                    <span>Analytics</span>
                </a>
            </Tab>
            {/* tag::snippet[] */}
        </Tabs>
    </>
  )
}

export default Header