import React from "react";
import "../Sidebar/sidebar.css";
import home from "../../images/home.png";

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <div className="Logo">
                <img src={home} alt=""/>
                <span>
                    V<span>D</span>ashboard
                </span>
            </div>

            <div className="menu">
                <div className="menuItem">
                    <div>
                        <AccountBalanceIcon />
                    </div>
                    <span>Home</span>
                </div>

               
                <div className="menuItem">
                    <div>
                        <SsidChartIcon />
                    </div>
                    <span> Year</span>
                </div>
                <div className="menuItem">
                    <div>
                        <SsidChartIcon />
                    </div>
                    <span> Country</span>
                </div>
                <div className="menuItem">
                    <div>
                        <SsidChartIcon />
                    </div>
                    <span>Topic</span>
                </div>
                <div className="menuItem">
                    <div>
                        <SsidChartIcon />
                    </div>
                    <span>Region</span>
                </div>
                <div className="menuItem">
                    <div>
                        <SsidChartIcon />
                    </div>
                    <span>City</span>
                </div>
                <div className="menuItem">
                    <div>
                        <FilterAltIcon />
                    </div>
                    <span>Filters</span>
                </div>

                <div className="menuItem">
                    <div>
                        <ExitToAppIcon />
                    </div>
                    <span>Exit</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
