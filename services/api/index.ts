import { CreateUserRequestPayload, FetchUserRequestPayload, UpdateUserRequestPayload } from "@/types/userTypes";
import apiClient from "./requestLayer"

export async function getAllUsers() {
    return apiClient.get('/users');
}

export async function getUser(payload: FetchUserRequestPayload){
    return apiClient.get(`/users/${payload.id}`);
}

export async function createUser(payload: CreateUserRequestPayload){
    return apiClient.post('/users', payload);
}   

export async function updateUser(payload: UpdateUserRequestPayload) {
    return apiClient.patch(`users/${payload.user.id}`, payload)
}

export async function deleteUser(payload: FetchUserRequestPayload){
    return apiClient.delete(`/users/${payload.id}`);
}