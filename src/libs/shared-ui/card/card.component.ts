import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IWeather } from 'src/libs/interfaces/weather.interface';

interface ICityDetail {
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() weatherData!: IWeather;
  @Input() imgUrl!: string;
  @Input() btnText = 'click';
  @Output() cardSubmit: EventEmitter<ICityDetail> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    // console.log('weather data', this.weatherData);
  }

  cityDetailEmit(coord: { lat: number; lon: number }, name: string) {
    const val = { coord, name };

    this.cardSubmit.emit(val);
  }
}
