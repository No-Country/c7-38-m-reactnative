import { createSlice } from "@reduxjs/toolkit";

const singSlice= createSlice({
    name: 'SingUp',
    initialState:{
        user: [],
        id: ''
    },
    reducers:{
        setUser:(state,action)=>{
            state.user = action.payload
        },
        setId: (state,action)=>{
            state.id = action.payload
        }
    }

});

export const {
    setUser,
    setId
    } = singSlice.actions;
export default singSlice.reducer;