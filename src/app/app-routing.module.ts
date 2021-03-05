import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((mod) => mod.HomeModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./search/search.module').then((mod) => mod.SearchModule),
  },
  {
    path: '**',
    // redirect home or load the module doesn't matter..
    loadChildren: () =>
      import('./home/home.module').then((mod) => mod.HomeModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true, // this prevents losing route point after refresh in prod environment
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
