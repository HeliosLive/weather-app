import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMenu } from 'src/libs';
import { MenuService } from 'src/libs/shared-data/services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Weather App';

  menuData$: Observable<IMenu[]>;
  constructor(private readonly menuService: MenuService) {
    this.menuData$ = menuService.data;
  }

  ngOnInit() {
    this.menuService.loadMenuItems();
  }
}
