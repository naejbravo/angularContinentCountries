import { ContinentInterface } from './../continent/models/continent';
import { Component, OnInit } from '@angular/core';
import { CountryService } from './services/country.service';
import { CountryInterface } from './models/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  public country: CountryInterface[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe((data: any) => {
      const apiResults: CountryInterface[] = data;
      const formattedCountries = apiResults.map(({ _id, id, name, alias, img }) => ({
        _id,
        id,
        name,
        alias,
        img,
      }));
      this.country = formattedCountries;
    });
  }
}
