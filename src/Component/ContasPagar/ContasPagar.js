import React from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import Header from '../../Component/Header/index';
import DaftarMhs from './DaftarMhs';
import BotaoAdd from './Header';


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