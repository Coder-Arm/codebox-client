<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 57cd06f5c854e387ed561f1fb2b5e0231d5018b1
import {Pagination} from '@mui/material';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { manageSkips } from '../../redux/skipSlice';

  const PaginationComponent = () => {
    const arenas = useSelector(state => state.arenas);
<<<<<<< HEAD
    const [selectedPage,setSelectedPage] = useState(1);
      const dispatch = useDispatch();
    
      function handleChange(event,page){
      // console.log(page);
=======
    const skipState = useSelector(state => state.skip)
    const [selectedPage,setSelectedPage] = useState(!skipState ? 1 : skipState/3+1);
      const dispatch = useDispatch();
    // console.log(skipState/3+1);
      function handleChange(event,page){
>>>>>>> 57cd06f5c854e387ed561f1fb2b5e0231d5018b1
      setSelectedPage(page);
      dispatch(manageSkips((page-1)*3))
      }
    return (
      <Pagination page={selectedPage} count={arenas ? parseInt(arenas.length/3) + 1 : 0} shape="rounded"  style={(arenas && arenas.length <= 3) ? {display : 'none'} : {display : 'flex'}}
      onChange={handleChange}/>
    ) 
  }

export default PaginationComponent
