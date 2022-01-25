import { Component, Input, OnInit } from '@angular/core';
import { NavInterface } from '../../models/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Input() navigator!: NavInterface[];
  constructor() {}

  ngOnInit(): void {}
}
