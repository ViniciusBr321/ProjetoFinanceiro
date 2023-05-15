import React, { useState } from "react";
import Logo from "../.././img/Logo.png";
import Notificacao from "../.././img/Notificacao.png";
import Usuario from "../.././img/Usuario.png";
import { Container, lightTheme } from './styles';
import { FaBars } from 'react-icons/fa';
import Sidebar from '../Sidebar';
import '../Header/index.css';
import { ThemeProvider } from 'styled-components';
import { GlobalLayout } from "./GlobalStyle";


const Header = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return(
        <Container>
            <ThemeProvider theme={lightTheme}>
                <div className="teste" >
                    <img src={Logo} alt="Logo da empresa"/>
                </div>  
                <div className="n1">
                    <img src={Usuario} alt="Usuário"/>
                </div>
                <div className="n2">
                    <img src={Notificacao} alt="Notificação"/>
                </div>
                <FaBars onClick={showSidebar}/>
                {sidebar && <Sidebar active={setSidebar}/>}
                </ThemeProvider>
        </Container>
    )
}

export default Header