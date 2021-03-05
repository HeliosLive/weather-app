import { Component, Input, OnInit } from '@angular/core';
import { IMenu } from 'src/libs/interfaces/menu.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() menuItems: IMenu[] = [];
  constructor() {}

  ngOnInit(): void {}
}
