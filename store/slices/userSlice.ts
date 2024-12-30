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
    // fetchAllUsers
    builder.addCase(fetchAllUsersRequest, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchAllUsersSuccess, (state, action) => {
      state.loading = false;
      state.users = action.payload.users;
    });
    builder.addCase(fetchAllUsersFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    });

    // fetchUser
    builder.addCase(fetchUserRequest, (state) => {
      state.loading = true;
      state.error = null;
      state.selectedUser = null;
    });
    builder.addCase(fetchUserSuccess, (state, action) => {
      state.loading = false;
      state.selectedUser = action.payload.user;
    });
    builder.addCase(fetchUserFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    });

    // deleteUser
    builder.addCase(deleteUserRequest, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteUserSuccess, (state) => {
      state.loading = false;
    });
    builder.addCase(deleteUserFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    });

    // updateUser
    builder.addCase(updateUserRequest, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateUserSuccess, (state) => {
      state.loading = false;
    });
    builder.addCase(updateUserFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    });

    // createUser
    builder.addCase(createUserRequest, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createUserSuccess, (state) => {
      state.loading = false;
    });
    builder.addCase(createUserFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    });
  },
});

export default userSlice.reducer;