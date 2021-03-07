import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() icon = 'home';
  @Input() title = 'Weather App';
  @Output() actionButtonClicked: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
