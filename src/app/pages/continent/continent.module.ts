import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContinentRoutingModule } from './continent-routing.module';
import { ContinentComponent } from './continent.component';
import { ContinentDetailComponent } from './components/continent-detail/continent-detail.component';


@NgModule({
  declarations: [
    ContinentComponent,
    ContinentDetailComponent
  ],
  imports: [
    CommonModule,
    ContinentRoutingModule
  ]
})
export class ContinentModule { }
