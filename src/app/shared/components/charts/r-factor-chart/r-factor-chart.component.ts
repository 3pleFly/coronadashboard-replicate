import { AfterViewInit, Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'highcharts';
import data from '../../../../../assets/rFactorData.json';

@Component({
  selector: 'app-r-factor-chart',
  templateUrl: './r-factor-chart.component.html',
  styleUrls: ['./r-factor-chart.component.scss'],
})
export class RFactorChartComponent implements AfterViewInit {
  chart!: Chart;

  constructor() {}

  ngAfterViewInit(): void {
    this.chart = Highcharts.chart('rFactor', {
      title: {
        text: 'R מקדם ההדבקה',
      },
      series: [],
      chart: {
        styledMode: true,
      },
      xAxis: {
        type: 'datetime',
        labels: {
          format: '{value:%e-%b}',
        },
      },
      yAxis: {
        title: { text: '' },
      },
      plotOptions: {
        area: {
          stacking: 'normal',
        },
      },
    });

    const rFactor: any[] = [];
    const rFactorSpread: any[] = [];

    data.data.forEach((value) => {
      const date = new Date(value.day_date);
      rFactorSpread.push({
        x: date.getTime(),
        y: parseFloat(value.R + ''),
      });
      rFactor.push({
        x: date.getTime(),
        y: 1,
      });
    });

    this.chart.addSeries({
      name: 'מקדם ההדבקה',
      showInLegend: false,
      type: 'line',
      data: rFactorSpread,
    });
    this.chart.addSeries({
      showInNavigator: false,
      name: 'R=1 (R>1 מגיפה בהתפשטות)',
      type: 'line',
      data: rFactor,
    });
  }
}
