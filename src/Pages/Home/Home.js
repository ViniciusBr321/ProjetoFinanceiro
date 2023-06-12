import React from 'react';
import HomeRightbar from '../../Component/HomeRightbar/HomeRightbar';
<<<<<<< HEAD
=======
import Sidebar from '../../Component/Sidebar/index.jsx';
>>>>>>> f9cea5dff0470058700004b01c2bffc685f787b3
import "./home.css"
import Header from '../../Component/Header/index.jsx';

export default function Home() {
 return (
   <div>
      <Header/>
    <div className='MainHomeContainer'>
        <HomeRightbar/>
    </div>
   </div>
 );
}