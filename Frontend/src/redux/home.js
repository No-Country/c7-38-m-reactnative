import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice ({
    name: 'home',
    initialState: {
        name: 'Jonathan',
        weight: 80,
        idealWeight: 69,
        training:100,
    },
});


export default homeSlice.reducer;