export interface UserType {
    id: string,
    name : string,
    email : string,
    phoneNumber: string
}

export interface FetchAllUsersSuccessPayload {
    users: UserType[]
}

export interface FetchUserRequestPayload {
    id: string
}
export interface FetchUserSuccessPayload {
    user: UserType
}

export interface RequestErrorPayload {
    error: string
}

export interface UpdateUserRequestPayload {
    user: Partial<UserType>
}

export interface CreateUserRequestPayload {
    name: string;
    email: string;
    phoneNumber: string;
}

export interface UserState {
    users: UserType[];
    selectedUser: UserType | null;
    loading: boolean;
    error: string | null;
  }