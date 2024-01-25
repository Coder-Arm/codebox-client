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
<<<<<<< HEAD
=======
import isAuth from '../utils/isAuth';
>>>>>>> 57cd06f5c854e387ed561f1fb2b5e0231d5018b1

const LoginPage = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [loading,setLoading] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    (async function(){
<<<<<<< HEAD
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
=======
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
>>>>>>> 57cd06f5c854e387ed561f1fb2b5e0231d5018b1
  

  async function handleSubmit(e){
     e.preventDefault()
<<<<<<< HEAD
     try{
       const response = await axios.post(hostName+'/login',{email,password},{
        withCredentials: true,
      });
       const status  = response.data.status;
       if(status !== 201){
=======
     setLoading(true);
     try{
       const response = await axios.post(hostName+'/login',{email,password});
       const status  = response.data.status;
       if(status !== 201){
        setLoading(false);
>>>>>>> 57cd06f5c854e387ed561f1fb2b5e0231d5018b1
        toast.error(response.data.error || response.data.message);
         return; 
      }
       else {
<<<<<<< HEAD
=======
        setLoading(false);
        Cookies.set('userToken', response.data.token);
>>>>>>> 57cd06f5c854e387ed561f1fb2b5e0231d5018b1
         toast.success(response.data.message)
         navigate('/dashboard')
       };
     }
     catch(err){
<<<<<<< HEAD
=======
      setLoading(false);
>>>>>>> 57cd06f5c854e387ed561f1fb2b5e0231d5018b1
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
