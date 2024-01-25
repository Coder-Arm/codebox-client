import {createSlice} from '@reduxjs/toolkit';

const initialState = [];
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