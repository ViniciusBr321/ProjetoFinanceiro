import React from "react";
import { Container, Content } from './styles.js'
import {
    FaTimes,
    FaHome,
    FaRegSun,
    FaIdCardAlt,
    FaRegFileAlt,
    FaSortAmountUp,
    FaSortAmountDownAlt,
} from 'react-icons/fa';
<<<<<<< HEAD
import SidebarItem from '../SidebarItem/index.jsx';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
=======
import SidebarItem from '../SidebarItem/index.jsx'
>>>>>>> f9cea5dff0470058700004b01c2bffc685f787b3

const Sidebar = ({ active }) => {
    const closeSidebar = () => {
        active(false)
    }

    return (
        <Container sidebar={active}> 
            <FaTimes onClick={closeSidebar} />
<<<<<<< HEAD
            <Content>
                <Link to={'/Home'}>
                    <SidebarItem  Icon={FaHome} Text="Pagina Inicial"/>
                </Link>
                <Link to={"/ContasPagar"}>
                    <SidebarItem  Icon={FaSortAmountUp} Text="Contar a Pagar" />
                </Link>
                    <SidebarItem  Icon={FaSortAmountDownAlt} Text="Contas a Receber"/>
                <Link to={"/Cadastro"}>
                    <SidebarItem  Icon={FaIdCardAlt} Text="Cadastro"/>
                </Link>
=======
            <div className="toggle-switch">
                <label className="switch-label">
                    <input type="checkbox" className="checkbox" />
                    <span className="slider"></span>
                </label>
            </div>
            <Content>
                <SidebarItem  Icon={FaHome} Text="Pagina Inicial"/>
                <SidebarItem  Icon={FaSortAmountUp} Text="Contar a Pagar" />
                <SidebarItem  Icon={FaSortAmountDownAlt} Text="Contas a Receber"/>
                <SidebarItem  Icon={FaIdCardAlt} Text="Cadastro"/>
>>>>>>> f9cea5dff0470058700004b01c2bffc685f787b3
                <SidebarItem  Icon={FaRegFileAlt} Text="Relatórios"/>
                <SidebarItem  Icon={FaRegSun} Text="Configurações"/>
            </Content>
        </Container>
    )
}

export default Sidebar;
