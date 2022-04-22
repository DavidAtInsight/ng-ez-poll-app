import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of, from } from 'rxjs'
import { switchMap, map, catchError } from 'rxjs/operators';

import { loadUser, loadUserSuccess, loadUserFailure } from "./user.actions";
import { AppState } from "../app.state";
import { AuthService } from "src/app/services/auth/auth.service";

@Injectable()
export class UserEffects {

    constructor(private actions$: Actions, private store: Store<AppState>, private authService: AuthService) {}

    loadUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadUser),
            switchMap(() =>
                from(this.authService.getAuthUser()).pipe(
                    map((appUser) => loadUserSuccess({ user: appUser })),
                    catchError((error) => of(loadUserFailure({ error })))
                )
            )
        )
    )

}