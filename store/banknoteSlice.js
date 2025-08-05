// banknoteSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    banknotes_list: [],
    banknote: { nominal: "" },
};

export const banknoteSlice = createSlice({
    name: 'banknotes',
    initialState,
    reducers: {
        setBanknotes: (state, { payload }) => {
            console.log(payload);
            state.banknotes_list = payload.banknotes_list;
        },
        setBanknote: (state, { payload }) => {
            console.log(payload);
            state.banknote = payload.banknote;
        },
        resetBanknote: (state) => {
            state.banknote = {};
        },
    },
});

export const banknoteReducer = banknoteSlice.reducer;

export const { setBanknotes, setBanknote, resetBanknote } = banknoteSlice.actions;
