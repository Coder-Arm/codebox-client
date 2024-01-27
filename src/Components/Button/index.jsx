import React,{useState} from 'react'
import {useNavigate } from 'react-router-dom'
import axios from 'axios'
import hostName from '../../utils/domain'
import Cookies from 'js-cookie'
import toast from 'react-hot-toast'
import './style.css'
import Loader from '../Loader'
const ButtonComponent = ({name,bgColor,type,id,color,html,css,js}) => {
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate()
  const buttonStyle = {
    backgroundColor:bgColor,
    color
  }

  async function handleAccountDeletion(){
    setLoading(true);
     const response = await axios.post(hostName+'/dashboard/delete-account',{id});
     if(response.data.status === 204){
      setLoading(false);
        Cookies.remove('userToken')
      toast.success(response.data.message);
      navigate('/signup')
     }
     else {
      setLoading(false)
      toast.error(response.data.message)
    };
   }

   async function handleSave(id,html,css,js){
        try{
          setLoading(true);
            const response = await axios.post(hostName+'/save-files',{id,html,css,js});
            setLoading(false);
            toast.success(response.data.message);
        }
        catch(error){
          setLoading(false)
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

  return (<>
  <Loader loading={loading}/>
    <button className='btn' type={type} onClick={() => handleClick(id)} id={id} style={bgColor ? buttonStyle : {background : '#6200EE'}}>{name}</button>
    </>
  )
}

export default ButtonComponent
