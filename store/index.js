import { configureStore } from '@reduxjs/toolkit';

import { banknoteReducer } from './banknoteSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
    reducer: {
        banknote: banknoteReducer,
        filter: filterReducer,
    },
});
