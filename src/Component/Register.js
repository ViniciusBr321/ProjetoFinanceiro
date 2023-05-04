import React from 'react';
import "./Register.css";
import Navbar from "./Navbar";
import { DataGrid } from '@mui/x-data-grid';
import Lapis from '../Component/Icons/lapis.png';
import { Button } from '@mui/material';
import 

export default function Register() {

const columns = [
  { field: 'id', headerName: 'Data', width: 110 },
  { field: 'firstName', headerName: 'Nome', width: 130 },
  { field: 'lastName', headerName: 'Descrição', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'action',
    headerName: 'Alterar',
    width:130,
    renderCell:(params) =>{
      return(
        <Button className='lapisEdit'>
          <div className='lapisDiv'>
            <img className='lapisImg' src={`${Lapis}`}/>
          </div>
        </Button>
      )
    }
  },
];

const rows = [
  { id: '10/02/2023', lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: '11/02/2023', lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: '11/03/2023', lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: '11/03/2023', lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: '11/03/2023', lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: '11/03/2023', lastName: 'Melisandre', firstName: 'Tiago', age: 150 },
  { id: '11/03/2023', lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: '11/03/2023', lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: '11/03/2023', lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: '11/03/2023', lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

 return (
   <div className='TeamMembers'>
      <Navbar/>
      <div style={{ height: '100vh', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
   </div>
 );
}

