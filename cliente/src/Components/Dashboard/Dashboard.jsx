import React from "react";
import Sidebar from './Components/SideBar Section/Sidebar' 
import Body from './Components/Body Section/Body' 

const Dashboard = () => {
    return(
        <div className="dashboard flex">
            <Sidebar/>
            <Body/>
        </div>
    )

}

export default Dashboard