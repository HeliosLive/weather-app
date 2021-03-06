import { Component, Input, OnInit } from '@angular/core';
import { IForecast } from 'src/libs/interfaces/forecast.interface';

@Component({
  selector: 'app-daily-card',
  templateUrl: './daily-card.component.html',
  styleUrls: ['./daily-card.component.scss'],
})
export class DailyCardComponent implements OnInit {
  @Input() forecastData!: IForecast;
  @Input() imageUrl!: string;
  @Input() cityName!: string;

  constructor() {}

  ngOnInit(): void {}
}
