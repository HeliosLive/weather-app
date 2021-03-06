import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {
  IgxIconModule,
  IgxNavbarModule,
  IgxNavigationDrawerModule,
  IgxButtonModule,
  IgxCardModule,
  IgxRippleModule,
  IgxInputGroupModule,
} from 'igniteui-angular';
import { RouterModule } from '@angular/router';
import { TemperatureConverterPipe } from '../pipes/temperature-converter.pipe';
import { TimestampDateFormatPipe } from '../pipes/timestamp-date-format.pipe';
import { DailyCardComponent } from './daily-card/daily-card.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CardComponent,
    NavbarComponent,
    SidebarComponent,
    DailyCardComponent,
    TemperatureConverterPipe,
    TimestampDateFormatPipe,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    IgxIconModule,
    IgxNavbarModule,
    IgxButtonModule,
    IgxCardModule,
    IgxRippleModule,
    IgxNavigationDrawerModule,
    IgxInputGroupModule,
  ],
  exports: [
    CardComponent,
    DailyCardComponent,
    NavbarComponent,
    SidebarComponent,
    SearchComponent,
  ],
})
export class SharedUIModule {}
