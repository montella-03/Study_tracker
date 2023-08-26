import {DrawerToggle} from "@hilla/react-components/DrawerToggle";
import {h2Style} from "Frontend/constants/Styles";
import {Tabs} from "@hilla/react-components/Tabs";
import {Tab} from "@hilla/react-components/Tab";
import React from "react";
import {TabSheet} from "@hilla/react-components/TabSheet";

interface NavbarProps {
    title: string;
    topics?: string[];
}
const Navbar= ({title,topics}: NavbarProps) => {
    return(
        <div slot="navbar">
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <DrawerToggle />
                <h2 style={h2Style}> {title}</h2>
            </div>
            <TabSheet>
            <Tabs>
                {topics?.map((topic) => (
                    <Tab key={topic} id={topic}>
                        <a tabIndex={-1}>{topic}</a>
                    </Tab>
                ))}
            </Tabs>
                <div {...{tab:"All"}}>
                    <p>All</p>
                </div>

            </TabSheet>
        </div>
    )
}
export default Navbar;