import React, { useEffect } from 'react'
import { useState } from 'react'
import Input from '../Components/Input';
import ButtonComponent from '../Components/Button';
import axios from 'axios'
import hostName from '../utils/domain';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Loader from '../Components/Loader';
import isAuth from '../utils/isAuth';

const LoginPage = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [loading,setLoading] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    (async function(){
      const userToken = Cookies.get('userToken');
        // console.log(userToken);
    if(userToken){
         setLoading(true)
      try{
         const response = await axios.post(hostName+'/auth',{userToken});
         if(response.data.status === 200){
          setLoading(false);
          navigate('/dashboard')
         }
      }
      catch(error){
         setLoading(false);
         navigate('/')
      }
    }
  })()
},[navigate])

useEffect(() => {
  (async function(){
    setLoading(true);
    const auth = await isAuth();
    if(auth){
      setLoading(false);
      navigate('/dashboard')
    }
    else{
      setLoading(false);
      navigate('/login')
    }
  })()
},[])
  

  async function handleSubmit(e){
     e.preventDefault()
     try{
       const response = await axios.post(hostName+'/login',{email,password});
       const status  = response.data.status;
       if(status !== 201){
        setLoading(false);
        toast.error(response.data.error || response.data.message);
         return; 
      }
       else {
        setLoading(false);
        Cookies.set('userToken', response.data.token);
         toast.success(response.data.message)
         navigate('/dashboard')
       };
     }
     catch(err){
      setLoading(false);
     console.log(err);
     }
  }
  
    return (<>
    <Loader loading={loading}/>
    <div className='form-container'>
     <form onSubmit={handleSubmit}>
      <h1 style={{textAlign : 'center'}}>Login</h1>
      <Input type={'email'} name={'email'} placeholder={'Enter your Email'} value={email} setValue={setEmail}/>
      <Input type={'password'} name={'password'} placeholder={'Enter your Password'} value={password} setValue={setPassword}/>
      <ButtonComponent name={'Sign in'} type={'submit'}/>
     </form>
     <p onClick={() => navigate('/signup')}>Don't have an account? Signup here.</p>
    </div>
    </>
  )
}

export default LoginPage
