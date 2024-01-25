import React, { useEffect, useState } from 'react'
import img1 from '../assets/img-1.jpg'
import { TypeAnimation } from 'react-type-animation';
import ButtonComponent from '../Components/Button';
<<<<<<< HEAD
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import Loader from '../Components/Loader';
import hostName from '../utils/domain';
import axios from 'axios';
=======
import { useNavigate } from 'react-router-dom';
import Loader from '../Components/Loader';
import isAuth from '../utils/isAuth';

>>>>>>> 57cd06f5c854e387ed561f1fb2b5e0231d5018b1
const HomePage = () => {
  const [loading,setLoading] = useState(false);
   const navigate = useNavigate();

   useEffect(() => {
<<<<<<< HEAD
    
    (async function(){
      const userToken = Cookies.get('userToken');
        // console.log(userToken);
    if(userToken){
      
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
    (async function(){
    setLoading(true);
    const auth = await isAuth();
    if(auth){
      setLoading(false);
      navigate('/dashboard')
    }
    else{
      setLoading(false);
      navigate('/')
    }
  })()
},[])

>>>>>>> 57cd06f5c854e387ed561f1fb2b5e0231d5018b1
  return (<>
      <Loader loading={loading}/>
        <div className='bg-box'>
        <TypeAnimation className='text-animate'
      sequence={[
        'Build, test, and discover front-end code.',
        800,
        'Accelerate your workflow in no time.',
        800 
      ]}
      wrapper="span"
      speed={50}
      style={{ padding : '60px',fontSize: '5vw', display: 'inline-block' ,color: 'white',width : '40%',fontWeight: "bold"}}
      repeat={Infinity}
    />
      <img className='img-1' src={img1} alt='background-1'/>
      <div className='auth-btns'>
        <ButtonComponent name={'Signup'} bgColor={'coral'}/>
        <ButtonComponent name={'Login'} bgColor={'coral'}/>
      </div>
      </div>
      </>
  )
}

export default HomePage
