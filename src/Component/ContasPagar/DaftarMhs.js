import React, { useState, useEffect } from 'react';
import API from '../../axios/Api';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  TableSortLabel,
  TablePagination
} from '@mui/material';
import DataTable from './DataTable';


const DaftarMhs = () => {
  const [mhs, setMhs] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [ search, setSearch] = useState('');
  const [orderBy, setOrderBy] = useState('');
  const [order, setOrder] = useState('asc');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await API.get('/viewdata.php').then((response) => {
      setMhs(response.data);
      setFilteredData(response.data);
    });
  };

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearch(value);
    filterData(value);
  };

  const filterData = (searchValue) => {
    const filteredData = mhs.filter(
      (mhs) =>
        mhs.num_docto.toLowerCase().includes(searchValue.toLowerCase()) ||
        mhs.fornecedor.toLowerCase().includes(searchValue.toLowerCase()) ||
        mhs.dt_lancamento.toLowerCase().includes(searchValue.toLowerCase()) ||
        mhs.dt_vencimento.toLowerCase().includes(searchValue.toLowerCase()) ||
        mhs.valor.toLowerCase().includes(searchValue.toLowerCase()) ||
        mhs.observacao.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  const handleSort = (property) => {
    const newOrder = orderBy === property && order === 'asc' ? 'desc' : 'asc';
    setOrderBy(property);
    setOrder(newOrder);
    sortData();
  };

  const sortData = () => {
    const sortedData = filteredData.sort((a, b) => {
      const aValue = a[orderBy];
      const bValue = b[orderBy];

      if (aValue && bValue) {
        if (order === 'asc') {
          return aValue.localeCompare(bValue);
        } else {
          return bValue.localeCompare(aValue);
        }
      } else {
        return 0; // Handle cases where the orderBy property is undefined
      }
    });

    setFilteredData([...sortedData]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  const stripeRow = (index) => {
    return index % 2 === 1 ? 'table-row-stripe' : '';
  };

  const renderData = paginatedData.map((mhs, index) => {
  return (
    <DataTable mhs={mhs} key={mhs.id} refresh={fetchData} stripeRow={stripeRow} index={index} />
  );
});

  return (




    
    <div className="container" style={{ marginTop: '20px' }}>
      <div className="row">
        <div className="col-lg-12  tabela">

            <TextField 
              id="search"
              label="Pesquisar"
              variant="outlined"
              onChange={handleSearchChange}
              style={{ marginBottom: '10px' }}
            />
          <Table className='white'>
            <TableHead>
              <TableRow>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'num_docto'}
                    direction={order}
                    onClick={() => handleSort('num_docto')}
                  >
                    <span className="cabecalho">Nº Docto</span>
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'fornecedor'}
                    direction={order}
                    onClick={() => handleSort('fornecedor')}
                  >
                    <span className="cabecalho">Fornecedor</span>
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'dt_lancamento'}
                    direction={order}
                    onClick={() => handleSort('dt_lancamento')}
                  >
                    <span className="cabecalho">Lançamento</span>
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'dt_vencimento'}
                    direction={order}
                    onClick={() => handleSort('dt_vencimento')}
                  >
                    <span className="cabecalho">Vencimento</span>
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'valor'}
                    direction={order}
                    onClick={() => handleSort('valor')}
                  >
                    <span className="cabecalho">Valor R$</span>
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <span className="cabecalho">Pagamento</span>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{renderData}</TableBody>
          </Table>

          <TablePagination className='white'
            rowsPerPageOptions={[10, 20, 30]}
            component="div"
            count={filteredData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </div>
    </div>


  );
};

export default DaftarMhs;
