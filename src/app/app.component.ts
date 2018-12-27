import { Component, OnInit } from '@angular/core';
import { build } from './utils/highcharts-template';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private _data;
  public options: Object;

  constructor() {
    this._data = [
      ['br', 300],
      ['it', 300],
      ['fr', 300],
      ['es', 300],
      ['de', 300],
      ['gr', 300],
      ['mt', 300],
      ['hr', 300],
      ['il', 300],
      ['ma', 300],
      ['be', 300],
      ['nl', 300],
      ['pl', 300]
    ];
  }
  ngOnInit(): void {
    this.options = build(this._data);
  }
}
