import { generatePromiseActionType } from "@/utils/generatePromiseActionType";

export const FETCH_ALL_USERS = generatePromiseActionType("user/FETCH_ALL_USERS");
export const FETCH_USER = generatePromiseActionType("user/FETCH_USER");
export const DELETE_USER = generatePromiseActionType("user/DELETE_USER");
export const UPDATE_USER = generatePromiseActionType("user/UPDATE_USER");
export const CREATE_USER = generatePromiseActionType("user/CREATE_USER");
export const SET_LOADING = 'user/SET_LOADING';