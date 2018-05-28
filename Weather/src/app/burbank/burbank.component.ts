import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  City: String;
  Humidity: Number;
  TempAverage: Number;
  TempMax: Number;
  TempMin: Number;
  Status: String;
  
    constructor(private _httpService: HttpService){
    }
  
    ngOnInit() {
      this.showBurbank();
    }
  
    showBurbank(){
      let burbankObservable = this._httpService.getBurbank()
      burbankObservable.subscribe(data =>{
      console.log('get burbank', data);
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