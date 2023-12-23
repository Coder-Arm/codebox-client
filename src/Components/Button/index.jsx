import React from 'react'
import {useNavigate } from 'react-router-dom'
import axios from 'axios'
import hostName from '../../utils/domain'
import Cookies from 'js-cookie'
import toast from 'react-hot-toast'
import './style.css'
const ButtonComponent = ({name,bgColor,type,id,color,html,css,js}) => {
  const navigate = useNavigate()
  const buttonStyle = {
    backgroundColor:bgColor,
    color
  }

  async function handleAccountDeletion(){
     const response = await axios.post(hostName+'/dashboard/delete-account',{id});
     if(response.data.status === 204){
        Cookies.remove('userToken')
      toast.success(response.data.message);
      navigate('/signup')
     }
     else toast.error(response.data.message);
   }

   async function handleSave(id,html,css,js){
        try{
            const response = await axios.post(hostName+'/save-files',{id,html,css,js});
            toast.success(response.data.message);
        }
        catch(error){
            console.log(error);
        }
   }

   
  function handleClick(id){
     if(name === 'Signup') navigate('/signup')
     if(name === 'Login') navigate('/login')
     if(name === 'Logout'){
       Cookies.remove('userToken')
       navigate('/login')
     }
     if(name === 'Delete Account') handleAccountDeletion();
     if(name === 'Exit'){
     const response = window.confirm('Have you saved the files ?');
     if(response){
        navigate('/dashboard')
     }
     }
     if(name === 'Save') handleSave(id,html,css,js)
  }

  return (
    <button className='btn' type={type} onClick={() => handleClick(id)} id={id} style={bgColor ? buttonStyle : {background : '#6200EE'}}>{name}</button>
  )
}

export default ButtonComponent
