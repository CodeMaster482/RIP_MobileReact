import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    lowPrice: 0,
    highPrice: 1000000,
    searchValue: ''
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setLowPrice: (state, { payload }) => {
            state.lowPrice = payload;
        },
        setHighPrice: (state, { payload }) => {
            state.highPrice = payload;
        },
        setSearchValue: (state, { payload }) => {
            state.searchValue = payload;
        },
    },
});

export const filterReducer = filterSlice.reducer;

export const { setLowPrice, setHighPrice, setSearchValue } = filterSlice.actions;