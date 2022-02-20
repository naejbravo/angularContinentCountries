import { ContinentService } from './services/continent.service';
import { ContinentInterface } from './models/continent';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-continent',
  templateUrl: './continent.component.html',
  styleUrls: ['./continent.component.scss'],
})
export class ContinentComponent implements OnInit {
  public continent: ContinentInterface[] = [];

  constructor(private continentService: ContinentService) {}

  ngOnInit(): void {
    this.continentService.getAllContinents().subscribe((data: any) => {
      const apiResults: ContinentInterface[] = data;

      const formattedContinents = apiResults.map(({ _id, id, name, img, area, population, density, subdivisions, timeZone  }) => ({
        _id,
        id,
        name,
        img,
        area,
        population,
        density,
        subdivisions,
        timeZone
      }));

      this.continent = formattedContinents;
    });
  }
}
