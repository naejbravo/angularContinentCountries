import { CountryDetailComponent } from './components/country-detail/country-detail.component';
import { CountryComponent } from './country.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CountryComponent,
  },
  {
    path: ':idCountry',
    component: CountryDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryRoutingModule {}
