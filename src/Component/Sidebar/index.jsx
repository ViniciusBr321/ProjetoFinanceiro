import React from "react";
import { Container, Content } from './styles'
import {
    FaTimes,
    FaHome,
    FaRegSun,
    FaIdCardAlt,
    FaRegFileAlt,
    FaSortAmountUp,
    FaSortAmountDownAlt,
} from 'react-icons/fa';
import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {
    const closeSidebar = () => {
        active(false)
    }

    return (
        <Container sidebar={active}> 
            <FaTimes onClick={closeSidebar} />
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
                <SidebarItem  Icon={FaRegFileAlt} Text="Relatórios"/>
                <SidebarItem  Icon={FaRegSun} Text="Configurações"/>
            </Content>
        </Container>
    )
}

export default Sidebar;

