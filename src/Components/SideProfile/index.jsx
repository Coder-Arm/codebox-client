import { Avatar } from '@mui/material'
import React from 'react'
import ButtonComponent from '../Button'
import './style.css'

const SideProfile = ({data,isOpen}) => {
  return (
    <div className='side-profile' style={!isOpen ? {display : 'none'} : {display : 'flex'}}>
    <Avatar sx={{ bgcolor: 'tomato',
      width : '12vw', height : '12vw',
      fontSize : 50
   }}
     >{data.name[0].toUpperCase()}</Avatar>
    <div>{data.name}</div>
     <div className='out-btns'>
     <ButtonComponent name={'Logout'}/>
     <ButtonComponent name={'Delete Account'} id={data._id} bgColor={'crimson'}/>
     </div>
     </div>
  )
}

export default SideProfile
