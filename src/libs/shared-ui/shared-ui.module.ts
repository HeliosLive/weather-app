import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {
  IgxIconModule,
  IgxNavbarModule,
  IgxNavigationDrawerModule,
} from 'igniteui-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CardComponent, NavbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    IgxIconModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule,
  ],
  exports: [CardComponent, NavbarComponent, SidebarComponent],
})
export class SharedUIModule {}
