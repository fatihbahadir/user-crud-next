import { createAction } from "@reduxjs/toolkit";
import { CREATE_USER, DELETE_USER, FETCH_ALL_USERS, FETCH_USER, SET_LOADING, UPDATE_USER } from "../actionTypes/userActionTypes";
import { CreateUserRequestPayload, FetchAllUsersSuccessPayload, FetchUserRequestPayload, FetchUserSuccessPayload, RequestErrorPayload, UpdateUserRequestPayload } from "@/types/userTypes";

export const fetchAllUsersRequest = createAction(FETCH_ALL_USERS.REQUEST);
export const fetchAllUsersSuccess = createAction<FetchAllUsersSuccessPayload>(FETCH_ALL_USERS.SUCCESS);
export const fetchAllUsersFailure = createAction<RequestErrorPayload>(FETCH_ALL_USERS.ERROR); 

export const fetchUserRequest = createAction<FetchUserRequestPayload>(FETCH_USER.REQUEST);
export const fetchUserSuccess = createAction<FetchUserSuccessPayload>(FETCH_USER.SUCCESS);
export const fetchUserFailure = createAction<RequestErrorPayload>(FETCH_USER.ERROR);    

export const deleteUserRequest = createAction<FetchUserRequestPayload>(DELETE_USER.REQUEST);
export const deleteUserSuccess = createAction<FetchUserRequestPayload>(DELETE_USER.SUCCESS);
export const deleteUserFailure = createAction<RequestErrorPayload>(DELETE_USER.ERROR);

export const updateUserRequest = createAction<UpdateUserRequestPayload>(UPDATE_USER.REQUEST);
export const updateUserSuccess = createAction(UPDATE_USER.SUCCESS);
export const updateUserFailure = createAction<RequestErrorPayload>(UPDATE_USER.ERROR);

export const createUserRequest = createAction<CreateUserRequestPayload>(CREATE_USER.REQUEST);
export const createUserSuccess = createAction<CreateUserRequestPayload>(CREATE_USER.SUCCESS);
export const createUserFailure = createAction<RequestErrorPayload>(CREATE_USER.ERROR);

export const setLoading = createAction<boolean>(SET_LOADING);