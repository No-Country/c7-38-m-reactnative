import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './home';

export default configureStore ({
    reducer:{
        name: homeReducer,
        weight: homeReducer,
        idealWeight: homeReducer,
        training: homeReducer
    },
});