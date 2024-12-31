import { call, put, takeLatest } from "redux-saga/effects";
import { DELETE_USER, FETCH_ALL_USERS } from "../actionTypes/userActionTypes";
import { deleteUser, getAllUsers } from "@/services/api";
import { deleteUserFailure, deleteUserSuccess, fetchAllUsersFailure, fetchAllUsersSuccess } from "../actionCreators/userActions";
import { showToast } from "../actionCreators/uiActions";
import { v4 as uuid } from 'uuid';
import { FetchUserRequestPayload } from "@/types/userTypes";

function* handleFetchAllUsers() {
    try {
        const { data } = yield call(getAllUsers);
        yield put(fetchAllUsersSuccess({ users: data.data }))
        
    } catch (err : any) {
        console.log(err.status);
        
        const errorMsg = err.message ?? 'Something went wrong';
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
        const errorMsg = err.message ?? 'Something went wrong';
        yield put(showToast({
            id: uuid(),
            type: 'error',
            message: errorMsg
        }))
        yield put(deleteUserFailure({ error: errorMsg }))
    }
}

export default function* userSaga() {
    yield takeLatest(FETCH_ALL_USERS.REQUEST, handleFetchAllUsers)
    yield takeLatest(DELETE_USER.REQUEST, handleDeleteUser);

}
