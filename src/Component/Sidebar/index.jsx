import React from "react";
import { Container, Content } from './styles.js';
import Logo from "../Icons/Logo.png";
import {
    FaTimes,
    FaHome,
    FaRegSun,
    FaIdCardAlt,
    FaRegFileAlt,
    FaSortAmountUp,
    FaSortAmountDownAlt,
} from 'react-icons/fa';
import SidebarItem from '../SidebarItem/index.jsx';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const Sidebar = ({ active }) => {
    const closeSidebar = () => {
        active(false)
    }

    return (
        <Container sidebar={active}> 
            <FaTimes onClick={closeSidebar} />
            <Content>
                <Link to={'/Home'} style={{textDecoration:'none'}}>
                    <SidebarItem  Icon={FaHome} Text="Pagina Inicial"/>
                </Link>
                <Link to={"/ContasPagar"} style={{textDecoration:'none'}}>
                    <SidebarItem  Icon={FaSortAmountUp} Text="Contar a Pagar" />
                </Link>
                    <SidebarItem  Icon={FaSortAmountDownAlt} Text="Contas a Receber"/>
                <Link to={"/Cadastro"} style={{textDecoration:'none'}}>
                    <SidebarItem  Icon={FaIdCardAlt} Text="Cadastro"/>
                </Link>
                <SidebarItem  Icon={FaRegFileAlt} Text="Relatórios"/>
                <SidebarItem  Icon={FaRegSun} Text="Configurações"/>

                <div className="logo-under" >
                    <img src={Logo} alt="Logo da empresa" style={{width: '120px' , paddingTop: '64%' }}/>
                </div> 
            </Content>
        </Container>
    )
}

export default Sidebar;
