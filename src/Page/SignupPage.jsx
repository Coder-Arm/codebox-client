import React, { useEffect } from 'react'
import { useState } from 'react'
import Input from '../Components/Input';
import ButtonComponent from '../Components/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import hostName from '../utils/domain';
import Cookies from 'js-cookie';
import Loader from '../Components/Loader';
import toast from 'react-hot-toast';
const SignupPage = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

     const [loading,setLoading] = useState(false);
     const navigate = useNavigate()
 
  useEffect(() => {
    (async function(){
      const userToken = Cookies.get('userToken');
 //  console.log(userToken);
    if(userToken){
      setLoading(true);
      try{
         const response = await axios.post(hostName+'/auth',{userToken});
         if(response.data.status === 200){
          setLoading(false);
          navigate('/login')
         }
         else setLoading(false);
      }
      catch(error){
         setLoading(false);
         navigate('/')
      }
    }
  })()
},[])

 async function handleSubmit(e){
    e.preventDefault();
    try{
      const response = await axios.post(hostName+'/signup',{name,email,password});
      const status  = response.data.status;
      if(status !== 201){
      toast.error(response.data.error || response.data.message);
        return; 
    }
      else {
        toast.success(response.data.message)
        navigate('/login')
      };
    }
    catch(err){
    console.log(err);
    }
  }

  return (<>
  <Loader loading={loading}/>
    <div className='form-container'>
     <form onSubmit={handleSubmit}>
      <h1 style={{textAlign : 'center'}}>Signup</h1>
      <Input type={'text'} name={'name'} placeholder={'Enter your Name'} value={name} setValue={setName}/>
      <Input type={'email'} name={'email'} placeholder={'Enter your Email'} value={email} setValue={setEmail}/>
      <Input type={'password'} name={'password'} placeholder={'Enter your Password'} value={password} setValue={setPassword}/>
      <ButtonComponent name={'Register'} type={'submit'}/>
     </form>
     <p onClick={() => navigate('/login')}>Already have an account? Login here.</p>
    </div>
    </>
  )
}

export default SignupPage
