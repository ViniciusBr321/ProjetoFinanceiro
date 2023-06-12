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
                <SidebarItem  Icon={FaRegFileAlt} Text="Relatórios"/>
                <SidebarItem  Icon={FaRegSun} Text="Configurações"/>
            </Content>
        </Container>
    )
}

export default Sidebar;
