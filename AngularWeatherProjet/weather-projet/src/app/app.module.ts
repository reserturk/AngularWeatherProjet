import { ServerPostComponent } from './serverPost/serverPost/serverPost.component';
import { ValuesComponent } from './updateValues/values/values.component';
import { UserServerComponent } from './getServer/userServer/userServer.component';
import { AuthGuardService } from './services/auth/authGuard.service';
import { LoginComponent } from './login/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { appRoutes } from './routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { WeatherComponent } from './weather/weather.component';
import { Weather16daysComponent } from './weather16days/weather16days.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertifyService } from './services/aletify/alertify.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WeatherComponent,
    Weather16daysComponent,
    LoginComponent,
    UserServerComponent,
    ValuesComponent,
    ServerPostComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
    
   
    
  ],
  providers: [AlertifyService,AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
