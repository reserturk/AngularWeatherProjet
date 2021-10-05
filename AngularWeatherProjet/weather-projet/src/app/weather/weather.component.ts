import { weat } from './../models/weat';
import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers:[WeatherService]
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService:WeatherService) { }
  weat!:weat;
  ngOnInit() {

    this.weatherService.getWeather().subscribe(data=>{
      this.weat=data;


    })
  }

}
