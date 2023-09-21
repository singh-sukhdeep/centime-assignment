
import { createSlice } from '@reduxjs/toolkit'
import { getItem, setItem } from '../services/storage.service';
import { LANG_KEY } from '../utils/constant';


const defaultlang = getItem(LANG_KEY) || 'en';


export const appSlice = createSlice({
    name: 'appState',
    initialState: {
        appMode: 'light',
        appLanguage: defaultlang
    },
    reducers: {
        changeAppMode: (state) => {
            state.appMode = 'dark';
        },
        changeAppLanguage: (state, action) => {
            setItem(LANG_KEY, action.payload);
            state.appLanguage = action.payload;
        }
    },
})

export const { changeAppMode, changeAppLanguage } = appSlice.actions;


export const selectAppMode = (state) => state?.appState?.appMode;

export const selectAppLanguage = (state) => state?.appState?.appLanguage;

export default appSlice.reducer;
