import { Weather16daysComponent } from './weather16days/weather16days.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
export const appRoutes :Routes =[
    {path:"sayfabir",component:WeatherComponent},
    {path:"sayfaiki",component:Weather16daysComponent},
    {path:"**",redirectTo:"sayfabir",pathMatch:"full"}
];
