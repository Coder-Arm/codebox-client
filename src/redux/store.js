import { configureStore } from '@reduxjs/toolkit';
import skipReducer from './skipSlice';
import arenasReducer from './arenasSlice'
const  store = configureStore({
reducer : {
    skip : skipReducer,
    arenas : arenasReducer
}
})

export default store;