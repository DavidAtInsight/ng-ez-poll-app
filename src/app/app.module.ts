import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { LogoComponent } from './components/UI/molecules/logo/logo.component';
import { PollCardComponent } from './components/UI/molecules/poll-card/poll-card.component';
import { PollNameComponent } from './components/UI/molecules/poll-name/poll-name.component';
import { CreatePollComponent } from './components/UI/organisms/create-poll/create-poll.component';
import { FooterComponent } from './components/UI/organisms/footer/footer.component';
import { MyPollsComponent } from './components/UI/organisms/my-polls/my-polls.component';
import { NavbarComponent } from './components/UI/organisms/navbar/navbar.component';
import { QuickStartComponent } from './components/UI/organisms/quick-start/quick-start.component';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
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
  LoginOutline,
  LogoutOutline,
  PieChartOutline
} from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [
  AppstoreAddOutline,
  CheckCircleOutline,
  DeleteOutline,
  EditOutline,
  LoginOutline,
  LogoutOutline,
  PieChartOutline
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LandingPageComponent,
    LogoComponent,
    PollCardComponent,
    PollNameComponent,
    CreatePollComponent,
    FooterComponent,
    MyPollsComponent,
    NavbarComponent,
    QuickStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    NzButtonModule,
    NzCardModule,
    NzDividerModule,
    NzIconModule.forChild(icons),
    NzPageHeaderModule,
    NzSpaceModule,
    NzTagModule,
    NzTypographyModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
