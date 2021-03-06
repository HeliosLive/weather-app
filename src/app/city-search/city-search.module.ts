import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CitySearchComponent } from './city-search.component';
import { SharedUIModule } from 'src/libs';

const routes: Routes = [
  {
    path: '',
    component: CitySearchComponent,
  },
];

@NgModule({
  declarations: [CitySearchComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedUIModule],
})
export class CitySearchModule {}
