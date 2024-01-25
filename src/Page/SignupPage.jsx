import React, { useEffect } from 'react'
import { useState } from 'react'
import Input from '../Components/Input';
import ButtonComponent from '../Components/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import hostName from '../utils/domain';
<<<<<<< HEAD
import Cookies from 'js-cookie';
import Loader from '../Components/Loader';
import toast from 'react-hot-toast';
=======
import Loader from '../Components/Loader';
import toast from 'react-hot-toast';
import isAuth from '../utils/isAuth';

>>>>>>> 57cd06f5c854e387ed561f1fb2b5e0231d5018b1
const SignupPage = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
<<<<<<< HEAD

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
=======
  const [loading,setLoading] = useState(false);

     const navigate = useNavigate()
 
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
        navigate('/signup')
      }
    })()
  },[])

 async function handleSubmit(e){
  setLoading(true);
>>>>>>> 57cd06f5c854e387ed561f1fb2b5e0231d5018b1
    e.preventDefault();
    try{
      const response = await axios.post(hostName+'/signup',{name,email,password});
      const status  = response.data.status;
      if(status !== 201){
<<<<<<< HEAD
=======
        setLoading(false);
>>>>>>> 57cd06f5c854e387ed561f1fb2b5e0231d5018b1
      toast.error(response.data.error || response.data.message);
        return; 
    }
      else {
<<<<<<< HEAD
=======
        setLoading(false);
>>>>>>> 57cd06f5c854e387ed561f1fb2b5e0231d5018b1
        toast.success(response.data.message)
        navigate('/login')
      };
    }
    catch(err){
<<<<<<< HEAD
=======
      setLoading(false)
>>>>>>> 57cd06f5c854e387ed561f1fb2b5e0231d5018b1
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
