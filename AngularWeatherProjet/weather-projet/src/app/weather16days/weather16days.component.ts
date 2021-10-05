import { Component, OnInit } from '@angular/core';
import { Sweat } from '../models/sweat';
import { weat } from '../models/weat';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather16days',
  templateUrl: './weather16days.component.html',
  styleUrls: ['./weather16days.component.css'],
  providers:[WeatherService]
})
export class Weather16daysComponent implements OnInit {

  constructor(private weatherService:WeatherService) { }
  weat!:weat;
  days=['Salı',"çarşamba","perşembe","Cuma","Cumartesi","Pazar",'pazartesi']
  ngOnInit() {

    this.weatherService.getDetailWeather().subscribe(data=>{
      this.weat=data;


    })
  }

}
