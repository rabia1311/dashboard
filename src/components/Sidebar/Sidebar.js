import React, { useState } from "react";
import "../Sidebar/sidebar.css";
import home from "../../images/home.png";
import { useNavigate } from "react-router-dom";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import PieChartIcon from '@mui/icons-material/PieChart';
import ScatterPlotTwoToneIcon from '@mui/icons-material/ScatterPlotTwoTone';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import InsertChartIcon from '@mui/icons-material/InsertChart';

const Sidebar = () => {
    const navigate = useNavigate();
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    const handleMenuItemClick = (route) => {
        navigate(route);
        toggleDrawer();
    };

    const drawerOptions = [
        { label: "Topic", route: "/topicfilter" },
       
        { label: "Region", route: "/filter" },
        { label: "Pestle", route: "/pestle" },
        { label: "End Year", route: "/end" }
    ];

    return (
        <div className="Sidebar">
            <div className="Logo">
                <img src={home} alt=""/>
                <span>
                    V<span>D</span>ashboard
                </span>
            </div>

            <div className="menu">
                <div className="menuItem" onClick={() => navigate("/")}>
                    <div>
                        <AccountBalanceIcon />
                    </div>
                    <span>Home</span>
                </div>
                <div className="menuItem"  onClick={() => navigate("/year")}>
                    <div>
                        <SsidChartIcon />
                    </div>
                    <span>Year</span>
                </div>
                <div className="menuItem"  onClick={() => navigate("/country")}>
                    <div>
                        <InsertChartIcon />
                    </div>
                    <span>Country</span>
                </div>
                <div className="menuItem"  onClick={() => navigate("/city")}>
                    <div>
                        <ScatterPlotTwoToneIcon />
                    </div>
                    <span>Intensity</span>
                </div>
                <div className="menuItem"   onClick={toggleDrawer}>
                    <div>
                        <FilterAltIcon />
                    </div>
                    <span>Filters</span>
                </div>
                <div className="menuItem"  onClick={() => navigate("/exit")}>
                    <div>
                        <ExitToAppIcon />
                    </div>
                    <span>Exit</span>
                </div>
            </div>
            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
                <List>
                    {drawerOptions.map((option, index) => (
                        <ListItem button key={index} onClick={() => handleMenuItemClick(option.route)}>
                            <ListItemText primary={option.label} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
};

export default Sidebar;
