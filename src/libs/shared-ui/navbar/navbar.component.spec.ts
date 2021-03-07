import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  IgxButtonModule,
  IgxIconModule,
  IgxNavbarModule,
  IgxRippleModule,
} from 'igniteui-angular';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        IgxIconModule,
        IgxNavbarModule,
        IgxButtonModule,
        IgxRippleModule,
      ],
      declarations: [NavbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
