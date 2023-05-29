import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private http: HttpClient) { }

  getCityForecast(): Observable<any> {
    return this.http.get('http://localhost:3000/forecasts');
  }
}
