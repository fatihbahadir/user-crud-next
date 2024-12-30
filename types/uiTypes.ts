export interface ToastPayload {
    id: string;
    message: string;    
    type: 'success' | 'error' | 'info' | 'warning';
}

export interface UiState {
    toasts: ToastPayload[]
}