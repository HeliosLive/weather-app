import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedUIModule } from 'src/libs';
import {
  IgxCarouselModule,
  IgxSliderModule,
  IgxListModule,
} from 'igniteui-angular';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    IgxCarouselModule,
    IgxSliderModule,
    IgxListModule,
    RouterModule.forChild(routes),
    SharedUIModule,
  ],
})
export class HomeModule {}
