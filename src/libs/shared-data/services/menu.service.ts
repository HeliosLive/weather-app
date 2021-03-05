import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMenu } from 'src/libs/interfaces/menu.interface';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  // Due to there is no permission control, only aim is return all possible menu items.
  private data$: BehaviorSubject<IMenu[]> = new BehaviorSubject(null as any);
  data = this.data$.asObservable();
  private collapse$: BehaviorSubject<boolean> = new BehaviorSubject(
    false as any
  );
  collapse = this.collapse$.asObservable();

  menuItems = [
    {
      name: 'Home',
      icon: 'house',
      url: 'home',
    },
    {
      name: 'Search',
      icon: 'search',
      url: 'search',
    },
  ];
  constructor() {}

  loadMenuItems() {
    this.data$.next(this.menuItems);
  }

  collapseMenu(event: boolean) {
    this.collapse$.next(event);
  }
}
