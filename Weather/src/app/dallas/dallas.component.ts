import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  City: String;
  Humidity: Number;
  TempAverage: Number;
  TempMax: Number;
  TempMin: Number;
  Status: String;
  
    constructor(private _httpService: HttpService){
    }
  
    ngOnInit() {
      this.showDallas();
    }
  
    showDallas(){
      let dallasObservable = this._httpService.getDallas()
      dallasObservable.subscribe(data =>{
      console.log('get dallas', data);
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