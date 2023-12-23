import {createSlice} from '@reduxjs/toolkit';

const initialState = null;
const arenasSlice = createSlice({
    name : 'arenas',
    initialState,
    reducers : {
        getArenas(state,action){
         return state = action.payload
        }
    }
})

export const {getArenas} = arenasSlice.actions;
export default arenasSlice.reducer;