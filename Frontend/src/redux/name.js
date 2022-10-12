import { createSlice } from "@reduxjs/toolkit";

export const nameSlice = createSlice ({
    name: 'nombre',
    initialState: {
        nombre: 'Jonathan'
    },
    reducers: {
        change1: (state) => {
            state.nombre = 'Valentin';
        },
        change2: (state) => {
            state.nombre = 'Francisco';
        },
    }
});

export const { change1, change2 } = nameSlice.actions;

export default nameSlice.reducer;