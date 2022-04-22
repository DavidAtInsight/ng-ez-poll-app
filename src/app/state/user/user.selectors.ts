import { createSelector } from "@ngrx/store";

import { AppState } from "../app.state";
import { UserState } from "./user.reducer";

export const selectUsers = (state: AppState) => state.user;

export const selectUser = createSelector(
    selectUsers,
    (state: UserState) => state.user
);