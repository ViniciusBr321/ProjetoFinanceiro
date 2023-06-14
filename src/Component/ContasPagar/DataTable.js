import React, { useState } from 'react';
import API from '../../axios/Api';
import { TableRow, TableCell } from '@mui/material';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faMoneyBillWave, faCheck, faTrashCan,faPenToSquare  } from '@fortawesome/free-solid-svg-icons';
import { faPix } from '@fortawesome/free-brands-svg-icons';
import '../../styles/index.css';
import EditModal from './EditModal';
import { format } from 'date-fns';

function DataTable({ mhs, refresh }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [editFormData, setEditFormData] = useState({
    num_docto: mhs.num_docto,
    fornecedor: mhs.fornecedor,
    dt_lancamento: mhs.dt_lancamento,
    dt_vencimento: mhs.dt_vencimento,
    valor: mhs.valor,
    observacao: mhs.observacao
  });

  const formatDate = (date) => {
    // Verifique se a data não está vazia
    if (!date) {
      return '';
    }

    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      return ''; // Retorna uma string vazia se a data não for válida
    }

    // Converta a data para o formato brasileiro (DD-MM-AAAA)
    const formattedDate = format(parsedDate, 'dd/MM/yyyy');
    return formattedDate;
  };

  const deleteMhs = async () => {
    await API.delete('deletemhs.php?id=' + mhs.id);
    return refresh();
  };

  const deleteConfirm = () => {
    confirmAlert({
      title: 'Confirme a ação',
      message: 'Você deseja excluir o Documento: ' + mhs.num_docto + ' ?',
      buttons: [
        {
          className: 'confirm-delete',
          label: 'Deletar',
          onClick: () => deleteMhs()
        },
        {
          label: 'Não, voltar',
          onClick: () => {}
        }
      ]
    });
  };

  const handleEditModalShow = () => {
    setShowEditModal(true);
  };

  const handleEditModalClose = () => {
    setShowEditModal(false);
  };

  const handleEditFormChange = (e) => {
    e.persist(); // Mantenha o evento sintético persistentemente disponível
    setEditFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await API.put(`/editmhs.php?id=${mhs.id}`, editFormData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      handleEditModalClose();

      // Atualize o estado local do componente DataTable com os novos valores
      setEditFormData({
        num_docto: editFormData.num_docto,
        fornecedor: editFormData.fornecedor,
        dt_lancamento: editFormData.dt_lancamento,
        dt_vencimento: editFormData.dt_vencimento,
        valor: editFormData.valor,
        observacao: editFormData.observacao
      });

      refresh(); // Atualize a tabela após a edição
    } catch (error) {
      console.log(error);
    }
  };

  const getFormaQuitacaoIcon = (formaQuitacao) => {
    switch (formaQuitacao) {
      case 'Dinheiro':
        return <FontAwesomeIcon icon={faMoneyBillWave} />;
      case 'PIX':
        return <FontAwesomeIcon icon={faPix} />;
      default:
        return null;
    }
  };

  return (
    <TableRow className={`status`}>
      <TableCell className="sit-flex">
        <div className="document-info">
          <FontAwesomeIcon icon={faFile} className='document-icon' />
          {mhs.num_docto}
        </div>
        <div
          className="situacao-info"
          style={{
            backgroundColor:
              mhs.situacao === 'Aberto'
                ? '#348fe2'
                : mhs.situacao === 'Vencido'
                ? 'orange'
                : mhs.situacao === 'Recebida'
                ? '#5cb85c'
                : '',
            boxShadow:
              mhs.situacao === 'Aberto'
                ? '0px 10px 14px -7px #0578dc'
                : mhs.situacao === 'Vencido'
                ? '0px 10px 13px -7px #b56f05'
                : mhs.situacao === 'Recebida'
                ? '0px 10px 14px -7px #3e7327'
                : '',
          }}
        >
          {mhs.situacao}
        </div>
      </TableCell>

      <TableCell>{mhs.fornecedor}</TableCell>
      <TableCell>{formatDate(mhs.dt_lancamento)}</TableCell>
      <TableCell>
        <span className="style-vencimento">{formatDate(mhs.dt_vencimento)}</span>
      </TableCell>
      <TableCell>R${mhs.valor}</TableCell>
      <TableCell className='nav-recebimento'>
        <div className='recebimento'>
          <div className='recebimento-child'>
            {formatDate(mhs.dt_recebimento)}
          </div>
          <div className='recebimento-child'>R$ {mhs.valor_recebido}</div>
          <div
            className='recebimento-child '
            style={{
              color:
                mhs.forma_quitacao === 'Dinheiro'
                  ? '#1b5e20'
                  : mhs.forma_quitacao === 'PIX'
                  ? 'orange'
                  : '',
              textShadow:
                mhs.forma_quitacao === 'Dinheiro'
                  ? '0px 10px 14px -7px #1b5e20'
                  : mhs.forma_quitacao === 'PIX'
                  ? '0px 10px 13px -7px #b56f05'
                  : '',
            }}
          >
            {getFormaQuitacaoIcon(mhs.forma_quitacao)} {mhs.forma_quitacao}
          </div>
        </div>
      </TableCell>
      <TableCell className="action-icons">

      <FontAwesomeIcon icon={faPenToSquare} className='edit' id='Edit-icon' onClick={handleEditModalShow} />
      <FontAwesomeIcon icon={faTrashCan} className='delete' id='Delete-icon' onClick={deleteConfirm} />
      <FontAwesomeIcon icon={faCheck}  className='receive' id='Receive-icon' onClick={null}/>

      </TableCell>

      <EditModal
        show={showEditModal}
        handleClose={handleEditModalClose}
        formData={editFormData}
        handleChange={handleEditFormChange}
        handleSubmit={handleEditFormSubmit}
      />
    </TableRow>
  );
}

export default DataTable;
