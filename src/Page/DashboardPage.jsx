import React, { useEffect, useState } from 'react'
import CreateArena from '../Components/CreateArena';
import hostName from '../utils/domain';
import axios from 'axios';
import Cookies from 'js-cookie';
import Loader from '../Components/Loader';
import RecentArenas from '../Components/RecentArenas';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SideProfile from '../Components/SideProfile';

const menuStyle = {
  position : 'fixed', 
  top : '20px',
  left : '50%',
  transform : 'translateX(-50%)',
  backgroundColor : 'white',
  borderRadius : '50%',
  padding : '5px',
  fontSize : '2rem',
  cursor : 'pointer',
  zIndex : 1000,
}
const DashboardPage = () => {
  const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    const [isOpen,setIsOpen] = useState(false);
    
    useEffect(() => {
      setLoading(true);
      async function fetchData(){
        try{
          const userToken = Cookies.get('userToken');
          console.log('userToken',userToken);
           const response = await axios.post(hostName+'/dashboard',{userToken},{
            Headers : {
            'Content-type' : 'application/json',
             'Access-Control-Allow-Origin' : '*'
           }})
             setData(response.data.data);
              setLoading(false);
          }
        catch(error){
             console.log(error);
             setLoading(false);
        }
      }
      fetchData();
    },[])


  return (<>
  <Loader loading={loading}/>
   {data && <div className='dash-page'>
    <div style={{position : 'relative'}}>
    {!isOpen && <MenuIcon style={menuStyle} onClick={() => setIsOpen(prev => !prev)}/>}
    {isOpen && <CloseIcon style={menuStyle} onClick={() => setIsOpen(prev => !prev)}/>}
    </div>
    <SideProfile data={data} isOpen={isOpen}/>
      <div className='arena-container'>
       <div>Work Arena</div>
        <CreateArena/>
         <RecentArenas/>
      </div>
    </div>}
    </>
  )
}

export default DashboardPage
