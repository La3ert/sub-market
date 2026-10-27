import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UserProfile {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: UserProfile | null;
  token: string | null;
  role:
    "SUPER_ADMIN" | "MERCHANT_ADMIN" | "MERCHANT_MANAGER" | "CUSTOMER" | null;
  isAuthenticated: boolean;
  isInitialized: boolean;
}

const storedToken =
  localStorage.getItem("token") || sessionStorage.getItem("token");

const initialState: AuthState = {
  user: null,
  token: storedToken || null,
  role: null,
  isAuthenticated: !!storedToken,
  isInitialized: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{
        user: UserProfile;
        token: string;
        role: AuthState["role"];
        rememberMe?: boolean;
      }>,
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.isAuthenticated = true;

      if (action.payload.rememberMe !== undefined) {
        if (action.payload.rememberMe) {
          localStorage.setItem("token", action.payload.token);
          sessionStorage.removeItem("token");
        } else {
          sessionStorage.setItem("token", action.payload.token);
          localStorage.removeItem("token");
        }
      }
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
    },
    setInitialized: (state) => {
      state.isInitialized = true;
    },
  },
});

export const { setCredentials, logout, setInitialized } = authSlice.actions;
export default authSlice.reducer;
