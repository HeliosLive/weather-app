import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesModule, SharedUIModule } from 'src/libs';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServicesModule.forRoot(environment),
    SharedUIModule,
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
