import React, { useEffect, useState } from 'react'
import img1 from '../assets/img-1.jpg'
import { TypeAnimation } from 'react-type-animation';
import ButtonComponent from '../Components/Button';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import Loader from '../Components/Loader';
import hostName from '../utils/domain';
import axios from 'axios';
const HomePage = () => {
  const [loading,setLoading] = useState(false);
   const navigate = useNavigate();

//    useEffect(() => {
    
//     (async function(){
//       const userToken = Cookies.get('userToken');
//         // console.log(userToken);
//     if(userToken){
      
//       try{
//          const response = await axios.post(hostName+'/auth',{userToken});
//          if(response.data.status === 200){
//           setLoading(false);
//           navigate('/dashboard')
//          }
//       }
//       catch(error){
//          setLoading(false);
//          navigate('/')
//       }
//     }
//   })()
// },[navigate])
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
