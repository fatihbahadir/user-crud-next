import { delay, put, takeEvery } from "redux-saga/effects";
import { SHOW_TOAST } from "../actionTypes/uiActionTypes";
import { hideToast } from "../actionCreators/uiActions";
import { toast } from "react-toastify";
import { PayloadAction } from "@reduxjs/toolkit";
import { ToastPayload } from "@/types/uiTypes";

function* handleShowToast(action: PayloadAction<ToastPayload>) {
    const { id, message, type } = action.payload;  
    toast[type](message);
  
    yield delay(5000);
    yield put(hideToast(id));
  }

  export default function* uiSaga() {
    yield takeEvery(SHOW_TOAST, handleShowToast);
  }