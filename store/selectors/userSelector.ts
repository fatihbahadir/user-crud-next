import { RootState } from "@/store";

export const selectUsers = (state: RootState) => state.user.users;

export const selectSelectedUser = (state: RootState) => state.user.selectedUser;

export const selectUserLoading = (state: RootState) => state.user.loading;

export const selectUserError = (state: RootState) => state.user.error;