import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMenu } from 'src/libs/interfaces/menu.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  isMenuOpen = false;
  @Input() menuItems: IMenu[] = [];
  @Output() menuCollapse: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.menuCollapse.emit(this.isMenuOpen);
  }

  collapseMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuCollapse.emit(this.isMenuOpen);
  }
}
