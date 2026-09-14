import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UserProfile {
    id: string;
    email: string;
    name: string;
}

interface AuthState {
    user: UserProfile | null;
    token: string | null;
    role: 'SUPER_ADMIN' | 'MERCHANT_ADMIN' | 'MERCHANT_MANAGER' | 'CUSTOMER' | null;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    user: null,
    token: localStorage.getItem('token') || null,
    // role: null,
    // isAuthenticated: !!localStorage.getItem('token'),
    role: 'SUPER_ADMIN',
    isAuthenticated: true,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (
            state,
            action: PayloadAction<{ user: UserProfile; token: string; role: AuthState['role'] }>
        ) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.role = action.payload.role;
            state.isAuthenticated = true;
            localStorage.setItem('token', action.payload.token);
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.role = null;
            state.isAuthenticated = false;
            localStorage.removeItem('token');
        },
    },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;