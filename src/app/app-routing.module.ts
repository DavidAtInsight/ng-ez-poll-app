import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { IsAuthGuard } from './services/auth/is-auth.guard';
import { NotAuthGuard } from './services/auth/not-auth.guard';

import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';

//const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/login']);

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent, canActivate: [IsAuthGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [IsAuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [NotAuthGuard] },
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
