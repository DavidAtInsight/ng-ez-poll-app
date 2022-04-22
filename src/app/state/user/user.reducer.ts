import { createReducer, on } from "@ngrx/store";

import { User } from "src/app/models/auth/user.model";
import { loadUser, loadUserSuccess, loadUserFailure } from "./user.actions";

export interface UserState {
    user: User;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

const initialState: UserState = {
    user: {
        email: '',
        userId: '',
        isAuthenticated: false
    },
    error: '',
    status: 'pending'

};

export const userReducer = createReducer(
    initialState,
    on(loadUser, (state) => ({ ...state, status: 'loading' })),
    on(loadUserSuccess, (state, { user }) => ({
        ...state,
        user: user,
        error: '',
        status: 'success'
    })),
    on(loadUserFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error'
    }))
);