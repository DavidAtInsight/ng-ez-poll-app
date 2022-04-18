import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { LogoComponent } from './components/UI/molecules/logo/logo.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PollCardComponent } from './components/UI/molecules/poll-card/poll-card.component';
import { PollNameComponent } from './components/UI/molecules/poll-name/poll-name.component';
import { CreatePollComponent } from './components/UI/organisms/create-poll/create-poll.component';
import { FooterComponent } from './components/UI/organisms/footer/footer.component';
import { MyPollsComponent } from './components/UI/organisms/my-polls/my-polls.component';
import { NavbarComponent } from './components/UI/organisms/navbar/navbar.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { QuickStartComponent } from './components/UI/organisms/quick-start/quick-start.component';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { IconDefinition } from '@ant-design/icons-angular';
import {
  AppstoreAddOutline,
  CheckCircleOutline,
  DeleteOutline,
  EditOutline,
  LockOutline,
  LoginOutline,
  LogoutOutline,
  PieChartOutline,
  UserOutline
} from '@ant-design/icons-angular/icons';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth/auth.service';
import { PollService } from './services/poll/poll.service';

const icons: IconDefinition[] = [
  AppstoreAddOutline,
  CheckCircleOutline,
  DeleteOutline,
  EditOutline,
  LockOutline,
  LoginOutline,
  LogoutOutline,
  PieChartOutline,
  UserOutline
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LandingPageComponent,
    LogoComponent,
    LoginComponent,
    PollCardComponent,
    PollNameComponent,
    CreatePollComponent,
    FooterComponent,
    MyPollsComponent,
    NavbarComponent,
    SignupComponent,
    QuickStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,

    NzButtonModule,
    NzCardModule,
    NzCheckboxModule,
    NzDividerModule,
    NzGridModule,
    NzIconModule.forChild(icons),
    NzInputModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzTagModule,
    NzTypographyModule
  ],
  providers: [
    HttpClientModule,
    AuthService,
    PollService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
