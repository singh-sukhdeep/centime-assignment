
import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
    name: 'appState',
    initialState: {
        appMode: 'light',
        appLanguage: 'en'
    },
    reducers: {
        changeAppMode: (state) => {
            state.appMode = 'dark';
        },
        changeAppLanguage: (state) => {
            state.appLanguage = 'hi'
        }
    },
})

export const { changeAppMode, changeAppLanguage } = appSlice.actions;


export const selectAppMode = (state) => state?.appState.appMode;

export const selectAppLanguage = (state) => state?.appState.appLanguage;

export default appSlice.reducer;
