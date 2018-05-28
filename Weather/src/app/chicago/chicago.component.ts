import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  City: String;
  Humidity: Number;
  TempAverage: Number;
  TempMax: Number;
  TempMin: Number;
  Status: String;
  
    constructor(private _httpService: HttpService){
    }
  
    ngOnInit() {
      this.showChicago();
    }
  
    showChicago(){
      let dcObservable = this._httpService.getChicago()
      dcObservable.subscribe(data =>{
        console.log('get chicago', data);
        this.City = data['name'];
        this.Humidity = data['main']['humidity']
        this.TempAverage = this.Farenheit(data['main']['temp']);
        this.TempMax = this.Farenheit(data['main']['temp_max']);
        this.TempMin = this.Farenheit(data['main']['temp_min']);
        this.Status = data['weather'][0]['description'];
      })
    }
  
    Farenheit(temp){
      var Farenheit = Math.floor((temp)* 9/5 - 459.67)
      return Math.round(Farenheit);
    }
  }