import { CreateUserRequestPayload, FetchUserRequestPayload, UpdateUserRequestPayload } from "@/types/userTypes";
import apiClient from "./requestLayer"

const apiPrefix = "/api/v1"
export async function getAllUsers() {
    return apiClient.get(apiPrefix + '/user');
}

export async function getUser(payload: FetchUserRequestPayload){
    return apiClient.get(apiPrefix + `/user/${payload.id}`);
}

export async function createUser(payload: CreateUserRequestPayload){
    return apiClient.post(apiPrefix + '/user', payload);
}   

export async function updateUser(payload: UpdateUserRequestPayload) {
    return apiClient.patch(apiPrefix + `/user/${payload.user.id}`, payload)
}

export async function deleteUser(payload: FetchUserRequestPayload){
    return apiClient.delete(apiPrefix + `/user/${payload.id}`);
}