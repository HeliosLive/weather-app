import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  IgxButtonModule,
  IgxIconModule,
  IgxNavbarModule,
  IgxRippleModule,
} from 'igniteui-angular';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let textElem: DebugElement;
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

  it('It should equal the same title text with @Input value', () => {
    const text = 'This is a forecast app!';
    component.title = text;
    fixture.detectChanges();
    textElem = fixture.debugElement.query(By.css('h1'));

    expect(textElem.nativeElement.textContent.toString().trim()).toEqual(
      text.trim()
    );
  });
});
