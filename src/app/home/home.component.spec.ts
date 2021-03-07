import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedUIModule } from 'src/libs';
import { IgxCarouselModule, IgxSliderModule } from 'igniteui-angular';
import { HomeComponent } from './home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let tagEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        SharedUIModule,
        BrowserAnimationsModule,
        HttpClientModule,
        IgxCarouselModule,
        IgxSliderModule,
      ],
      declarations: [HomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 5 city cards inside of carousel after initialized', () => {
    const slides = fixture.debugElement.queryAll(By.css('.actionCitySlide'));
    expect(slides.length).toEqual(5);
  });

  // it('should have forecast template after triggering any city detail', () => {
  //   tagEl = fixture.debugElement.query(By.css('.cardActionButton'));
  //   tagEl.nativeElement.click();
  //   expect(component.getCityDetail).toHaveBeenCalled();
  // });

  it('should have skeleton template before triggering any city detail', () => {
    tagEl = fixture.debugElement.query(By.css('.actionSkeletonTemplate'));
    expect(tagEl.nativeElement).toBeTruthy();
  });
});
