import { ServerPostComponent } from './serverPost/serverPost/serverPost.component';
import { ValuesComponent } from './updateValues/values/values.component';
import { AuthGuardService } from './services/auth/authGuard.service';
import { LoginComponent } from './login/login/login.component';
import { Weather16daysComponent } from './weather16days/weather16days.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { UserServerComponent } from './getServer/userServer/userServer.component';
export const appRoutes :Routes =[
    {path:"sayfabir",component:WeatherComponent,canActivate:[AuthGuardService]},
    {path:"sayfaiki",component:Weather16daysComponent,canActivate:[AuthGuardService]},
    {path:"login",component:LoginComponent},
    {path:"getserver",component:UserServerComponent},
    {path:"update",component:ValuesComponent},
    {path:"serverPost",component:ServerPostComponent},
    {path:"**",redirectTo:"login",pathMatch:"full"}
];
