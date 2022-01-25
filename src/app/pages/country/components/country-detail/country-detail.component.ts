import { ContinentInterface } from './../../../continent/models/continent';
import { CountryService } from './../../services/country.service';
import { ContinentService } from './../../../continent/services/continent.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CountryInterface } from '../../models/country';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss'],
})
export class CountryDetailComponent implements OnInit {
  public country!: CountryInterface;
  constructor(
    private countryService: CountryService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const idCountry = params.get('idCountry');
      this.countryService.getCountry(idCountry).subscribe((data: any) => {
        const apiResult: CountryInterface = data;
        this.country = apiResult;
      });
    });
  }
}
