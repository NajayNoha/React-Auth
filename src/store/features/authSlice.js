
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null, 
  status: 'idle', // 'idle', 'loading', 'succeeded', or 'failed'
  error: null, 
};

export const loginAsync = createAsyncThunk('localhost:3000/condidats/add', async (credentials) => {
  try {
    const response = await axios.post('http://localhost:3000/condidats/add', credentials);
    return response.data.user; 
  } catch (error) {
    throw error.response.data; 
  }
});


export const registerAsync = createAsyncThunk('register', async (userData) => {
  try {
    const response = await axios.post('http://localhost:3000/condidats/add', userData);
    return response.data.user; 
  } catch (error) {
    throw error.response.data; 
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(registerAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});



export const { logout } = authSlice.actions;

export default authSlice.reducer;
