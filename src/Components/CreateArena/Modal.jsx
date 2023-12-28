import { Box, Button } from '@mui/material'
import Input from '../Input'
import {Modal} from '@mui/material'
import React, { useState } from 'react'
import ButtonComponent from '../Button';
import './style.css';
import Cookies from 'js-cookie';
import axios from 'axios';
import hostName from '../../utils/domain';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#393646',
  border: '2px solid #000',
  borderRadius : '10px',
  boxShadow: 24,
  p: 4
};

const ModalComponent = ({name,open,handleOpen,handleClose}) => {
     const [arenaName,setArenaName] = useState('');
     const navigate = useNavigate();

    async function handleCreation(e){
      e.preventDefault();
       const userToken =  Cookies.get('userToken');
       try{
           const response = await axios.post(hostName+'/dashboard/create-arena',{arenaName,userToken});
           if(response.data.status === 201){
            toast.success(response.data.message);
            navigate('/dashboard/editor',{state : {data : response.data.data}})
           }
           else{
            toast.error(response.data.error)
           }
       }
       catch(error){
        console.log(error);
        toast.error('Internal server error')
       }
     }

  return (
    <>
      <Button className='modal-btn' onClick={handleOpen}>{name}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleCreation}>
          <Input type={'text'} name={'arenaName'} placeholder={'Your arena name'} value={arenaName} setValue={setArenaName}/>
          <ButtonComponent name={'Create'} bgColor={'#5C5470'} />
          </form>
        </Box>
      </Modal>
    </>
  )
}

export default ModalComponent
