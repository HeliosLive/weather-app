import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCardComponent } from './daily-card.component';
import {
  IgxIconModule,
  IgxCardModule,
  IgxRippleModule,
} from 'igniteui-angular';

describe('DailyCardComponent', () => {
  let component: DailyCardComponent;
  let fixture: ComponentFixture<DailyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IgxIconModule, IgxCardModule, IgxRippleModule],
      declarations: [DailyCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
