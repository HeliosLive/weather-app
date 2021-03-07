import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import {
  IgxIconModule,
  IgxNavigationDrawerModule,
  IgxRippleModule,
} from 'igniteui-angular';
import { IMenu } from 'src/libs/interfaces/menu.interface';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { CitySearchComponent } from 'src/app/city-search/city-search.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterOutlet, ActivatedRoute } from '@angular/router';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let sidebarElem: DebugElement;
  let menuItemElem: DebugElement;
  let fixture: ComponentFixture<SidebarComponent>;
  // tslint:disable-next-line:prefer-const
  let router: Router;

  const routes: Routes = [
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'search',
      component: CitySearchComponent,
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        BrowserAnimationsModule,
        IgxIconModule,
        IgxNavigationDrawerModule,
        IgxRippleModule,
      ],
      declarations: [SidebarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('It should create a sidebar menu after sending menu items @Input', () => {
    const menuItems: IMenu[] = [
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
    component.menuItems = menuItems;
    fixture.detectChanges();
    sidebarElem = fixture.debugElement.query(By.css('.sidebar'));

    expect(sidebarElem.nativeElement).toBeTruthy();
  });

  it('It should navigate search after clicking it', () => {
    const menuItems: IMenu[] = [
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
    component.menuItems = menuItems;
    fixture.detectChanges();
    sidebarElem = fixture.debugElement.query(By.css('.sidebar'));

    expect(sidebarElem.nativeElement).toBeTruthy();

    const spy = spyOn(router, 'navigateByUrl');

    menuItemElem = fixture.debugElement.queryAll(
      By.css('.igx-nav-drawer__item')
    )[1];
    menuItemElem.nativeElement.click();
    const url = spy.calls.first().args[0];

    expect(url.toString()).toEqual('/search');
  });

  it('It should navigate home after clicking it', () => {
    const menuItems: IMenu[] = [
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
    component.menuItems = menuItems;
    fixture.detectChanges();
    sidebarElem = fixture.debugElement.query(By.css('.sidebar'));

    expect(sidebarElem.nativeElement).toBeTruthy();

    const spy = spyOn(router, 'navigateByUrl');

    menuItemElem = fixture.debugElement.queryAll(
      By.css('.igx-nav-drawer__item')
    )[0];
    menuItemElem.nativeElement.click();
    const url = spy.calls.first().args[0];

    expect(url.toString()).toEqual('/home');
  });
});
