import {DrawerToggle} from "@hilla/react-components/DrawerToggle";
import {h2Style} from "Frontend/constants/Styles";
import {Tabs} from "@hilla/react-components/Tabs";
import {Tab} from "@hilla/react-components/Tab";
import React from "react";

const Navbar= () => {
    return(
        <div slot="navbar">
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <DrawerToggle />
                <h2 style={h2Style}> orders</h2>
            </div>

            <Tabs>
                <Tab>
                    <a tabIndex={-1}>All</a>
                </Tab>

                <Tab>
                    <a tabIndex={-1}>Open</a>
                </Tab>
                {/* end::snippet[] */}
                <Tab>
                    <a tabIndex={-1}>Completed</a>
                </Tab>
                <Tab>
                    <a tabIndex={-1}>Cancelled</a>
                </Tab>

            </Tabs>
        </div>
    )
}
export default Navbar;