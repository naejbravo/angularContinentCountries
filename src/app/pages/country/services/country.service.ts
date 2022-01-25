import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CountryService {
  public countryURL: string = 'https://continents-country-api.vercel.app/api/countries';
  constructor(private httpClient: HttpClient) {}
  public getAllCountries() {
    return this.httpClient.get(this.countryURL);
  }
  public getCountry(idCountry: any) {
    return this.httpClient.get(`${this.countryURL}/${idCountry}`);
  }
}
