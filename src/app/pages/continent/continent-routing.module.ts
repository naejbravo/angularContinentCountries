import { ContinentComponent } from './continent.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContinentDetailComponent } from './components/continent-detail/continent-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ContinentComponent,
  },
  {
    path: ':idContinent',
    component: ContinentDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContinentRoutingModule {}
