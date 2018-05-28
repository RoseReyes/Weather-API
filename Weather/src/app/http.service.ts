import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getSeattle(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=2e578c56098d546b27aa3f53d8857cc5');
  }

  getSanJose(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=San+Jose&appid=2e578c56098d546b27aa3f53d8857cc5');
  }

  getBurbank(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Burbank&appid=2e578c56098d546b27aa3f53d8857cc5');
  }

  getDallas(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Dallas&appid=2e578c56098d546b27aa3f53d8857cc5');
  }

  getDC(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Washington&appid=2e578c56098d546b27aa3f53d8857cc5');
  }

  getChicago(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=2e578c56098d546b27aa3f53d8857cc5');
  }
  
}
