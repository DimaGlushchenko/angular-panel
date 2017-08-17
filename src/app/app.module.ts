import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './routing.module';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { SettingsService } from './services/settings.service';
import { ClientService } from './services/client.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { RegisterGuard } from './guards/register.guard';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService,
    SettingsService,
    AuthService,
    AuthGuard,
    RegisterGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
