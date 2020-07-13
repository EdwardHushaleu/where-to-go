import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserRoutingModule } from './modules/user/user-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AuthRoutingModule } from './modules/auth/auth-routing.module';
import { EventRoutingModule } from './modules/event/event-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserRoutingModule,
    AuthRoutingModule,
    EventRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
