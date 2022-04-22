import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { userReducer } from './state/user/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AuthComponent } from './components/pages/auth/auth.component';
import { MyPollsComponent } from './components/pages/my-polls/my-polls.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { LogoComponent } from './components/UI/molecules/logo/logo.component';
import { PollCardComponent } from './components/UI/molecules/poll-card/poll-card.component';
import { CreatePollComponent } from './components/UI/organisms/create-poll/create-poll.component';
import { FooterComponent } from './components/UI/organisms/footer/footer.component';
import { PollCollectionComponent } from './components/UI/organisms/poll-collection/poll-collection.component';
import { PollFormComponent } from './components/UI/molecules/poll-form/poll-form.component';
import { PublicPollsComponent } from './components/pages/public-polls/public-polls.component';
import { PrivatePollComponent } from './components/UI/molecules/private-poll/private-poll.component';
import { NavbarComponent } from './components/UI/organisms/navbar/navbar.component';
import { QuickStartComponent } from './components/UI/organisms/quick-start/quick-start.component';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { IconDefinition } from '@ant-design/icons-angular';
import {
    AppstoreAddOutline,
    BarChartOutline,
    CheckCircleOutline,
    DeleteOutline,
    EditOutline,
    InfoCircleOutline,
    LikeOutline,
    LockOutline,
    LoginOutline,
    LogoutOutline,
    MinusOutline,
    PieChartOutline,
    PlusOutline,
    UserOutline
} from '@ant-design/icons-angular/icons';

import { AuthService } from './services/auth/auth.service';
import { PollService } from './services/poll/poll.service';
import { UserEffects } from './state/user/user.effects';

const icons: IconDefinition[] = [
    AppstoreAddOutline,
    BarChartOutline,
    CheckCircleOutline,
    DeleteOutline,
    EditOutline,
    InfoCircleOutline,
    LikeOutline,
    LockOutline,
    LoginOutline,
    LogoutOutline,
    MinusOutline,
    PieChartOutline,
    PlusOutline,
    UserOutline
];

@NgModule({
  declarations: [
        AppComponent,
        AuthComponent,
        LandingPageComponent,
        LogoComponent,
        PollCardComponent,
        PollCollectionComponent,
        PollFormComponent,
        PrivatePollComponent,
        PublicPollsComponent,
        CreatePollComponent,
        FooterComponent,
        MyPollsComponent,
        NavbarComponent,
        QuickStartComponent
  ],
  imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({ user: userReducer}),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        EffectsModule.forRoot([UserEffects]),

        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        AngularFireAuthModule,

        NzButtonModule,
        NzCardModule,
        NzCheckboxModule,
        NzDividerModule,
        NzFormModule,
        NzGridModule,
        NzIconModule.forChild(icons),
        NzInputModule,
        NzModalModule,
        NzNotificationModule,
        NzPageHeaderModule,
        NzPopconfirmModule,
        NzRadioModule,
        NzSwitchModule,
        NzSpaceModule,
        NzTagModule,
        NzToolTipModule,
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
