import React from 'react';
import HomeRightbar from '../../Component/HomeRightbar/HomeRightbar';
import Sidebar from '../../Component/Sidebar';
import "./home.css"

export default function Home() {
 return (
   <div className='MainHomeContainer'>
        <Sidebar/>
        <HomeRightbar/>
   </div>
 );
}