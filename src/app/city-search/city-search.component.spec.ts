import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { SharedUIModule } from 'src/libs';

import { CitySearchComponent } from './city-search.component';

describe('CitySearchComponent', () => {
  let component: CitySearchComponent;
  let fixture: ComponentFixture<CitySearchComponent>;
  let tagEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        SharedUIModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        ToastrModule.forRoot({
          timeOut: 3400,
          progressBar: true,
          easing: 'ease-in',
          closeButton: false,
          progressAnimation: 'decreasing',
          preventDuplicates: true,
          positionClass: 'toast-bottom-left',
        }),
      ],
      declarations: [CitySearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should have city weather card template after typing "London" to input and be able to add that city ', () => {
  //   tagEl = fixture.debugElement.query(By.css('.cardActionButton'));
  //   tagEl.nativeElement.click();
  //   expect(component.getCityDetail).toHaveBeenCalled();
  // });

  it('should have search template after initialized', () => {
    tagEl = fixture.debugElement.query(By.css('.actionSearchTemplate'));
    expect(tagEl.nativeElement).toBeTruthy();
  });

  it('should have skeleton template right after initialized', () => {
    tagEl = fixture.debugElement.query(By.css('.actionSkeletonTemplate'));
    expect(tagEl.nativeElement).toBeTruthy();
  });
});
