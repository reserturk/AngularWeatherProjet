import { weat } from './../models/weat';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class WeatherService {

constructor(private httpClient:HttpClient) { }


allGetData="https://api.openweathermap.org/data/2.5/forecast?q=Istanbul&appid=b26232e1d82af79d7f728a614ed32b40&cnt=7&lang=tr&units=metric"
//https://api.openweathermap.org/data/2.5/weather?q=Istanbul&lang=tr&units=metric&appid=b26232e1d82af79d7f728a614ed32b40
//DetailAllGetData="https://api.openweathermap.org/data/2.5/forecast?q=Istanbul&callback=test&appid=b26232e1d82af79d7f728a614ed32b40&cnt=5&lang=tr&units=metric"

getWeather():Observable<weat>{
    return this.httpClient.get<weat>(this.allGetData+"&sayfabir")
}

 getDetailWeather():Observable<weat>{
     return this.httpClient.get<weat>(this.allGetData+"&sayfaiki")
 }

}
