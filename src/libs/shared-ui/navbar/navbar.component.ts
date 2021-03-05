import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() title: any;
  @Output() buttonClick: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  toogleLogged(event?: any) {
    console.log('clicked to navbar');
    // this.buttonClick.emit(event);
  }
}
