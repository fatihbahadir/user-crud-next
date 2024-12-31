import { call, put, select, takeLatest } from "redux-saga/effects";
import { CREATE_USER, DELETE_USER, FETCH_ALL_USERS, FETCH_USER, UPDATE_USER } from "../actionTypes/userActionTypes";
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "@/services/api";
import { deleteUserFailure, deleteUserSuccess, fetchAllUsersFailure, fetchAllUsersSuccess, fetchUserFailure, fetchUserSuccess, createUserSuccess, createUserFailure, fetchAllUsersRequest, updateUserFailure, updateUserSuccess } from "../actionCreators/userActions";
import { showToast } from "../actionCreators/uiActions";
import { v4 as uuid } from 'uuid';
import { CreateUserRequestPayload, FetchUserRequestPayload, UpdateUserRequestPayload, UserType } from "@/types/userTypes";
import { selectUsers } from "../selectors/userSelector";

function* handleFetchAllUsers() {
    try {
        const { data } = yield call(getAllUsers);
        yield put(fetchAllUsersSuccess({ users: data.data }))
        
    } catch (err : any) {
        console.log(err.status);
        
        const errorMsg = err.response.data.message ? err.response.data.message : err.message ?? 'Something went wrong';
        if (err.status === 404) {
            yield put(showToast({
                id: uuid(),
                type: 'info',
                message: 'No users found please add users first'
            }))
        }
        yield put(fetchAllUsersFailure({ error: errorMsg }))
        
    }
}

function* handleDeleteUser(action: { type: string; payload: FetchUserRequestPayload }) {
    try {
        const { id } = action.payload;
        yield call(deleteUser, { id });
        yield put(deleteUserSuccess({ id }));
        yield put(
            showToast({
                id: uuid(),
                type: "success",
                message: "User deleted succesfully"
            })
        ) 
    } catch (err : any) {
        const errorMsg = err.response.data.message ? err.response.data.message : err.message ?? 'Something went wrong';
        yield put(showToast({
            id: uuid(),
            type: 'error',
            message: errorMsg
        }))
        yield put(deleteUserFailure({ error: errorMsg }))
    }
}

function* handleFetchUser(action: { type: string, payload: FetchUserRequestPayload}) {
    try {
        const { id } = action.payload;
        const { data } = yield call(getUser, { id });
        yield put(fetchUserSuccess({
            user: data.data
        }))
    }
    catch (err : any) {
        const errorMsg = err.response.data.message ? err.response.data.message : err.message ?? 'Something went wrong';
        yield put(showToast({
            id: uuid(),
            type: 'error',
            message: errorMsg
        }))
        yield put(fetchUserFailure({ error: errorMsg }))
    }
}

function* handleCreateUser(action: { type: string, payload: CreateUserRequestPayload}) {
    try {
        yield call(createUser, action.payload);
        yield put(createUserSuccess(action.payload));
        yield put(
            showToast({
                id : uuid(),
                type: 'success',
                message: 'User created successfully'
            })
        )
    }
    catch(err : any) {
        const errorMsg = err.response.data.message ?? 'Something went wrong';
        yield put(showToast({
            id: uuid(),
            type: 'error',
            message: errorMsg
        }))
        yield put(createUserFailure({ error: errorMsg }))
    }
}

function* handleUpdateUser(action: { type: string; payload: UpdateUserRequestPayload }) {
    try {
        const { user } = action.payload;    
        const existingUsers: UserType[] = yield select(selectUsers);
        const existingUser = existingUsers.find((u: UserType) => u.id === user.id);

        let fieldsToUpdate: Partial<UserType> = {};

        if (existingUser) {
            Object.keys(user).forEach((key) => {
                const typedKey = key as keyof UserType;
                if (user[typedKey] !== existingUser[typedKey]) {
                    fieldsToUpdate[typedKey] = user[typedKey];
                }
            });
        }

        if (Object.keys(fieldsToUpdate).length === 0) {
            yield put(
                showToast({
                    id: uuid(),
                    type: "info",
                    message: "No changes detected.",
                })
            );
            yield put(updateUserFailure({ error: "No changes detected." }));
            return
        }

        yield call(updateUser, user.id!, { user: fieldsToUpdate });               

        yield put(updateUserSuccess());  

        yield put(
            showToast({
                id: uuid(),
                type: "success",
                message: "User updated successfully"
            })
        );

    } catch (err: any) {
        const errorMsg = err.response.data.message ?? 'Something went wrong';
        yield put(showToast({
            id: uuid(),
            type: 'error',
            message: errorMsg
        }));
        yield put(updateUserFailure({ error: errorMsg }));
    }
}
export default function* userSaga() {
    yield takeLatest(FETCH_ALL_USERS.REQUEST, handleFetchAllUsers);
    yield takeLatest(DELETE_USER.REQUEST, handleDeleteUser);
    yield takeLatest(FETCH_USER.REQUEST, handleFetchUser);
    yield takeLatest(CREATE_USER.REQUEST, handleCreateUser);
    yield takeLatest(UPDATE_USER.REQUEST, handleUpdateUser);
}
