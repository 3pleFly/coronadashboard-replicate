import { Component, Input, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/shared/services/data-api.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-hospitalized-chart',
  templateUrl: './hospitalized-chart.component.html',
  styleUrls: ['./hospitalized-chart.component.scss'],
})
export class HospitalizedChartComponent implements OnInit {
  @Input() width!: string;
  @Input() height!: string;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [
      {
        data: [1, 2, 3],
        type: 'line',
      },
    ],
    chart: {
      styledMode: true
     }
  };

  constructor(private dataApiService: DataApiService) {}

  ngOnInit(): void {}
}
