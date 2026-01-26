import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'light',
  colors: {
    light: {
      background: '#FFFFFF',
      text: '#000000',
      primary: '#007AFF',
      tabBar: '#F8F8F8',
    },
    dark: {
      background: '#000000',
      text: '#FFFFFF',
      primary: '#0A84FF',
      tabBar: '#1C1C1E',
    }
  }
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    }
  }
});

export const { toggleTheme } = themeSlice.actions;

export const selectThemeColors = (state) => {
  return state.theme.colors[state.theme.mode];
};

export const selectThemeMode = (state) => state.theme.mode;

export default themeSlice.reducer;