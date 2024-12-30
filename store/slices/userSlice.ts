import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllUsersRequest,
  fetchAllUsersSuccess,
  fetchAllUsersFailure,
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserFailure,
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure,
  createUserRequest,
  createUserSuccess,
  createUserFailure,
} from "@/store/actionCreators/userActions";
import { UserState } from "@/types/userTypes";

const initialState: UserState = {
  users: [],
  selectedUser: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsersRequest, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllUsersSuccess, (state, action) => {
        state.loading = false;
        state.users = action.payload.users;
      })
      .addCase(fetchAllUsersFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(fetchUserRequest, (state) => {
        state.loading = true;
        state.error = null;
        state.selectedUser = null;
      })
      .addCase(fetchUserSuccess, (state, action) => {
        state.loading = false;
        state.selectedUser = action.payload.user;
      })
      .addCase(fetchUserFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(deleteUserRequest, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUserSuccess, (state) => {
        state.loading = false;
      })
      .addCase(deleteUserFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(updateUserRequest, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserSuccess, (state) => {
        state.loading = false;
      })
      .addCase(updateUserFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(createUserRequest, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUserSuccess, (state) => {
        state.loading = false;
      })
      .addCase(createUserFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export default userSlice.reducer;