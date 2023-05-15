import React from 'react';
import HomeRightbar from '../../Component/HomeRightbar/HomeRightbar';
import Sidebar from '../../Component/Sidebar';
import "./home.css"
import Header from '../../Component/Header/index.jsx';

export default function Home() {
 return (
   <div className='MainHomeContainer'>
        <Sidebar/>
        <HomeRightbar/>
        <Header/>
   </div>
 );
}