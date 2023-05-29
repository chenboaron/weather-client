import { Component, OnInit } from '@angular/core';
import { ForecastService } from 'src/app/services/forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  panelOpenState = false;
  cityForecas: any[] = [];
  constructor(private forecastService: ForecastService,) {

  }

  ngOnInit(): void {
    this.forecastService.getCityForecast().subscribe(res => {
      this.cityForecas = res
    })
  }


  getDate(dt: number) {
    return new Date(dt * 1000).toDateString();
  }
 
}
