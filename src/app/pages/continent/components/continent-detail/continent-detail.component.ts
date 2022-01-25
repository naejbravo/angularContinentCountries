import { ContinentService } from './../../services/continent.service';
import { ContinentInterface } from './../../models/continent';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-continent-detail',
  templateUrl: './continent-detail.component.html',
  styleUrls: ['./continent-detail.component.scss'],
})
export class ContinentDetailComponent implements OnInit {
  public continent!: ContinentInterface;
  constructor(
    private activatedRoute: ActivatedRoute,
    private continentService: ContinentService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const idContinent = params.get('idContinent');
      this.continentService.getContinent(idContinent).subscribe((data: any) => {
        const apiResult: ContinentInterface = data;
        this.continent = apiResult;
      });
    });
  }
}
