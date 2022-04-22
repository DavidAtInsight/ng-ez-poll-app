import { createAction, props } from "@ngrx/store";

import { User } from "src/app/models/auth/user.model";

export const loadUser = createAction('[Auth] Get User');

export const loadUserSuccess = createAction(
    '[Auth] User Load Success',
    props<{ user: User }>()
);

export const loadUserFailure = createAction(
    '[Auth] User Load Failure',
    props<{ error: string }>()
)