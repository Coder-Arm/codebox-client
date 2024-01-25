import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import hostName from '../../utils/domain';
import Cookies from 'js-cookie';
import Loader from '../Loader';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import './style.css'
import toast from 'react-hot-toast';
import Output from '../Output';
import PaginationComponent from '../Pagination';
import { getArenas } from '../../redux/arenasSlice';

const RecentArenas = () => {
  const skipState = useSelector(state => state.skip);
  const arenas = useSelector(state => state.arenas)
  console.log('arenas',arenas);
  // console.log(skipState);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const page = parseInt(skipState/3)
  // console.log(page*3,page*3+3)
// console.log(data);
const dispatch = useDispatch();
  useEffect(() => {
  async function fetchData(){
    setLoading(true);
    const userToken = Cookies.get('userToken');
    try{  
     const response = await axios.get(hostName+`/recent-arenas/?skip=${skipState}&limit=3`,{
     headers : {
      Authorization : `Bearer ${userToken}`
     }
     });
      if(response.data.status === 200){
        dispatch(getArenas(response.data.total))
        setLoading(false);
      }
      else{
        setLoading(false);
      }
    }
    catch(error){
      setLoading(false);
      console.log(error);
    }
  }
   fetchData();
},[])
 async function goToArena(id){
     try{
      setLoading(true);
        const response = await axios.post(hostName+'/get-arena',{id});
        if(response.data.status === 200){
          setLoading(false)
          toast.success(response.data.message);
            navigate('/dashboard/editor',{state : {data : response.data.data}})
        }
        else{
          setLoading(false);
           toast.error(response.data.message);
        }
     }
     catch(error){
      setLoading(false)
      toast.error(error)
     }
 }

  async function handleArenaDeletion(e,id){
       e.stopPropagation();
    try{
      const response = await axios.post(hostName+'/delete-arena',{id});
      if(response.data.status === 200){
        toast.success(response.data.message);
        window.location.reload();
      }
      else{
         toast.error(response.data.message)
      }
   }
   catch(error){
    toast.error(error)
   }
  }

  return (<>
  <Loader loading={loading}/>
    <div style={{margin : '50px 0 40px 0'}}>Recent Arenas</div>
    { arenas.length > 0 ? 
    <div className='recent-arenas-container'>
     {arenas.slice(page*3,page*3+3).map(item => {
        return <div key={item._id} className='arena-box' id={item._id} onClick={() => goToArena(item._id)}>
          <Output html={item.html} css={item.css} js={item.js} preview={true}/>
          <div className='bottom'>
         <span>{item.arenaName}</span>
         <DeleteOutlineRoundedIcon htmlColor='black' fontSize='2rem' onClick={(e) => handleArenaDeletion(e,item._id)}/>
         </div>
        </div>
     })}
    </div> 
    : <p>No arenas developed</p>}
    <PaginationComponent/>
    </>  
  )
}

export default RecentArenas
