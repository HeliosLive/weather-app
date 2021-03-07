import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { IgxIconModule, IgxInputGroupModule } from 'igniteui-angular';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let tagEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        IgxIconModule,
        IgxInputGroupModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [SearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have search template after initialized', () => {
    tagEl = fixture.debugElement.query(By.css('.actionSearchInput'));
    expect(tagEl.nativeElement).toBeTruthy();
  });

  it('should have type in search input', () => {
    tagEl = fixture.debugElement.query(By.css('.actionSearchInput'));
    expect(tagEl.nativeElement).toBeTruthy();

    tagEl.nativeElement.value = 'I am typing a city name';
    tagEl.nativeElement.dispatchEvent(new Event('input'));
    expect(tagEl.nativeElement.value).toBe('I am typing a city name');
  });

  it('should form controller set value changes the input value', () => {
    tagEl = fixture.debugElement.query(By.css('.actionSearchInput'));
    expect(tagEl.nativeElement).toBeTruthy();

    // patch value or set value both works fine!
    component.createForm.controls.name.setValue('Random City Name');

    expect(tagEl.nativeElement.value).toBe('Random City Name');
  });
});
