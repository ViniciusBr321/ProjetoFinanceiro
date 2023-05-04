import React from 'react';
import "./sidebar.css";
import Home from "../Component/Icons/home.png";
import DailyTask from "../Component/Icons/DailyTask.png";
import MonthlyIncome from "../Component/Icons/monthlyIncome.png";
import Salary from "../Component/Icons/Salary.png";
import Settings from "../Component/Icons/settings.png";
import message from "../Component/Icons/message.png";
import Teammembers from "../Component/Icons/Teammembers.png";

import { Link } from 'react-router-dom'

export default function Sidebar() {
 return (
   <div className='mainSidebarContainer'>
        <div>
            <ul className='ulContainer'>
                <h4 className='menu'>Menu</h4>
                <Link to={"/"} style={{textDecoration:"none"}}>
                <li className='liContainer'>
                    <img src={`${Home}`} className='sidebaricons' alt=""/>
                    <p className='itemNames'>Home</p>
                </li>
                </Link>
                <Link to={"/list"} style={{textDecoration:"none"}}>
                <li className='liContainer'>                  
                    <img src={`${DailyTask}`} className='sidebaricons' alt=""/>
                    <p className='itemNames'> Contas à pagar</p>
                </li>
                </Link>
                <li className='liContainer'>
                    <img src={`${Teammembers}`} className='sidebaricons' alt=""/>
                    <p className='itemNames'>Contas a receber</p>
                </li>
                <li className='liContainer'>
                    <img src={`${MonthlyIncome}`} className='sidebaricons' alt=""/>
                    <p className='itemNames'>Relatorio</p>
                </li>
                <li className='liContainer'>
                    <img src={`${Salary}`} className='sidebaricons' alt=""/>
                    <p className='itemNames'>Home</p>
                </li>
                <li className='liContainer'>
                    <img src={`${Settings}`} className='sidebaricons' alt=""/>
                    <p className='itemNames'>Home</p>
                </li>
            </ul>

            
        </div>
   </div>
 );
}