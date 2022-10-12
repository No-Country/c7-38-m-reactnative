import { configureStore } from '@reduxjs/toolkit';
import nameReducer from './name';

export default configureStore ({
    reducer:{
        nombre: nameReducer,
    },
});