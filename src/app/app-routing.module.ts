import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './services/auth/auth.guard';

import { AuthComponent } from './components/pages/auth/auth.component';
import { MyPollsComponent } from './components/pages/my-polls/my-polls.component';
import { PublicPollsComponent } from './components/pages/public-polls/public-polls.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';

const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'auth', component: AuthComponent },
    { path: 'my-polls', component: MyPollsComponent, canActivate: [AuthGuard] },
    { path: 'public-polls', component: PublicPollsComponent, canActivate: [AuthGuard] },
    { path: '**', component: LandingPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule { }
