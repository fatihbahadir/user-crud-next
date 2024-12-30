import { ToastPayload, UiState } from "@/types/uiTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { hideToast, showToast } from "../actionCreators/uiActions";

const initialState: UiState = {
    toasts: []
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(showToast, (state, action: PayloadAction<ToastPayload>) => {
                state.toasts.push(action.payload);
            })
            .addCase(hideToast, (state, action: PayloadAction<string>) => {
                state.toasts = state.toasts.filter((toast) => toast.id !== action.payload);
            });
    }
});

export default uiSlice.reducer;