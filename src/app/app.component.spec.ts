import { DebugElement } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { SharedUIModule } from 'src/libs';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let tagEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        RouterTestingModule,
        SharedUIModule,
        BrowserAnimationsModule,
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
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Weather App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Weather App');
  });

  it('should have load the sidemenu items after initialized', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    tagEl = fixture.debugElement.query(By.css('.acitonSidebarMenu'));
    expect(tagEl.nativeElement).toBeTruthy();
  });

  it('should have navbar after initialized', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    tagEl = fixture.debugElement.query(By.css('.acitonNavbarMenu'));
    expect(tagEl.nativeElement).toBeTruthy();
  });
});
