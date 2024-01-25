import { Avatar } from '@mui/material'
import React from 'react'
import ButtonComponent from '../Button'
import './style.css'

const SideProfile = ({data,isOpen}) => {
  return (
    <div className='side-profile' style={!isOpen ? {display : 'none'} : {display : 'flex'}}>
    <Avatar sx={{ bgcolor: 'tomato',
<<<<<<< HEAD
      width : '12vw', height : '12vw',
=======
      width : '15vw', height : '15vw',
>>>>>>> 57cd06f5c854e387ed561f1fb2b5e0231d5018b1
      fontSize : 50
   }}
     >{data.name[0].toUpperCase()}</Avatar>
    <div>{data.name}</div>
     <div className='out-btns'>
     <ButtonComponent name={'Logout'}/>
<<<<<<< HEAD
     <ButtonComponent name={'Logout from all devices'}/>
=======
>>>>>>> 57cd06f5c854e387ed561f1fb2b5e0231d5018b1
     <ButtonComponent name={'Delete Account'} id={data._id} bgColor={'crimson'}/>
     </div>
     </div>
  )
}

export default SideProfile
