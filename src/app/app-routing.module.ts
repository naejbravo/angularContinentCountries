import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: `home`,
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: `continents`,
    loadChildren: () =>
      import('./pages/continent/continent.module').then(m => m.ContinentModule),
  },
  {
    path: `countries`,
    loadChildren: () =>
      import('./pages/country/country.module').then(m => m.CountryModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
