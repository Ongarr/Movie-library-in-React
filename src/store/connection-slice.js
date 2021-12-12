import { createSlice } from '@reduxjs/toolkit';

const initialStateConnection = {
  isLoading: false,
  connectionError: false,
};

const connectionSlice = createSlice({
  name: 'connectionStatus',
  initialState: initialStateConnection,
  reducers: {
    SET_CONNECTION_ERROR(state, action) {
      state.connectionError = action.payload;
    },
    SET_LOADING(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const connectionAction = connectionSlice.actions;

export default connectionSlice.reducer;
