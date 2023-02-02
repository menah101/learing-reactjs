import userApi from 'api/userApi';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
    setting: {},
  },
  reducers: {},
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
