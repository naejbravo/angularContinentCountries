import { Component } from '@angular/core';
import { NavInterface } from './core/models/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'client';
  public dataToNav: NavInterface[] = [
    {
      name: 'home',
      link: '/home',
    },
    {
      name: 'continents',
      link: '/continent',
    },
    {
      name: 'countries',
      link: '/country',
    },
  ];
}
