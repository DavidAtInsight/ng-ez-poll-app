import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { IsAuthGuard } from './services/auth/is-auth.guard';
import { NotAuthGuard } from './services/auth/not-auth.guard';

import { AuthComponent } from './components/pages/auth/auth.component';
import { MyPollsComponent } from './components/pages/my-polls/my-polls.component';
import { PublicPollsComponent } from './components/pages/public-polls/public-polls.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';

//const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/login']);

const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'auth', component: AuthComponent, canActivate: [IsAuthGuard] },
    { path: 'my-polls', component: MyPollsComponent, canActivate: [NotAuthGuard] },
    { path: 'public-polls', component: PublicPollsComponent },
    { path: '**', component: LandingPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
        IsAuthGuard, 
        NotAuthGuard
    ]
})
export class AppRoutingModule { }
