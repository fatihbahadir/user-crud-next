import { createAction } from "@reduxjs/toolkit";
import { FETCH_ALL_USERS } from "../actionTypes/userActionTypes";
import { CreateUserRequestPayload, FetchAllUsersSuccessPayload, FetchUserRequestPayload, FetchUserSuccessPayload, RequestErrorPayload, UpdateUserRequestPayload } from "@/types/userTypes";

export const fetchAllUsersRequest = createAction(FETCH_ALL_USERS.REQUEST);
export const fetchAllUsersSuccess = createAction<FetchAllUsersSuccessPayload>(FETCH_ALL_USERS.SUCCESS);
export const fetchAllUsersFailure = createAction<RequestErrorPayload>(FETCH_ALL_USERS.ERROR); 

export const fetchUserRequest = createAction<FetchUserRequestPayload>(FETCH_ALL_USERS.REQUEST);
export const fetchUserSuccess = createAction<FetchUserSuccessPayload>(FETCH_ALL_USERS.SUCCESS);
export const fetchUserFailure = createAction<RequestErrorPayload>(FETCH_ALL_USERS.ERROR);    

export const deleteUserRequest = createAction<FetchUserRequestPayload>(FETCH_ALL_USERS.REQUEST);
export const deleteUserSuccess = createAction(FETCH_ALL_USERS.SUCCESS);
export const deleteUserFailure = createAction<RequestErrorPayload>(FETCH_ALL_USERS.ERROR);

export const updateUserRequest = createAction<UpdateUserRequestPayload>(FETCH_ALL_USERS.REQUEST);
export const updateUserSuccess = createAction(FETCH_ALL_USERS.SUCCESS);
export const updateUserFailure = createAction<RequestErrorPayload>(FETCH_ALL_USERS.ERROR);

export const createUserRequest = createAction<CreateUserRequestPayload>(FETCH_ALL_USERS.REQUEST);
export const createUserSuccess = createAction(FETCH_ALL_USERS.SUCCESS);
export const createUserFailure = createAction<RequestErrorPayload>(FETCH_ALL_USERS.ERROR);