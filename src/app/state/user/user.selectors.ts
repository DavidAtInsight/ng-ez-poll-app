import { createSelector } from "@ngrx/store";

import { AppState } from "../app.state";
import { UserState } from "./user.reducer";

export const selectUsers = (state: AppState) => state.user;

export const selectUser = createSelector(
    selectUsers,
    (state: UserState) => state.user
);

export const selectUserAuthStatus = createSelector(
    selectUsers,
    (state: UserState) => state.user.isAuthenticated
);

export const selectUserId = createSelector(
    selectUsers,
    (state: UserState) => state.user.userId
);