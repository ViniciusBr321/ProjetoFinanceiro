import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import Header from '../../Component/Header/index';
import DaftarMhs from './DaftarMhs';
import BotaoAdd from './Header';
import { BrowserRouter as Link, Router } from 'react-router-dom';

function ContasPagar () {
    return (
        <div>
            <Header/>
            <BotaoAdd/>
            <DaftarMhs/>
        </div>
    )
}

export default ContasPagar