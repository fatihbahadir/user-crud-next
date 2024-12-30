import { ToastPayload } from "@/types/uiTypes";
import { createAction } from "@reduxjs/toolkit";
import { HIDE_TOAST, SHOW_TOAST } from "../actionTypes/uiActionTypes";

export const showToast = createAction<ToastPayload>(SHOW_TOAST);
export const hideToast = createAction<string>(HIDE_TOAST);