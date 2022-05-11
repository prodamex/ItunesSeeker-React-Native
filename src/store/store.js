import { configureStore } from '@reduxjs/toolkit'; 
import avisSlice from './reducer/avis.reducer';

const store = configureStore({
    // react toolkit separer les states en gros blocs - 
    reducer:{
        avis: avisSlice
    }
}); 

export default store
