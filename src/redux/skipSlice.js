import {createSlice} from '@reduxjs/toolkit';
<<<<<<< HEAD
 const initialState = 0;
=======

const initialState = 0;
>>>>>>> 57cd06f5c854e387ed561f1fb2b5e0231d5018b1
const skipSlice = createSlice({
   name : 'skip',
   initialState,
   reducers : {
    manageSkips(state,action){
<<<<<<< HEAD
     return state =action.payload
=======
     return state = action.payload
>>>>>>> 57cd06f5c854e387ed561f1fb2b5e0231d5018b1
    }
   }
})

export const {manageSkips} = skipSlice.actions;
export default skipSlice.reducer;
