import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ContinentService {
  public continentURL: string = 'https://continents-country-api.vercel.app/api/continents';
  constructor(private httpClient: HttpClient) {}

  public getAllContinents() {
    return this.httpClient.get(this.continentURL);
  }

  public getContinent(idContinent: any) {
    return this.httpClient.get(`${this.continentURL}/${idContinent}`);
  }
}
