import { Component, Input, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/shared/services/data-api.service';
import * as Highcharts from 'highcharts';

Highcharts.setOptions({
  lang: {
    shortMonths: [
      'ינואר',
      'פברואר',
      'מרץ',
      'אפריל',
      'מאי',
      'יוני',
      'יולי',
      'אוגוסט',
      'ספטמבר',
      'אוקטובר',
      'נובמבר',
      'דצמבר',
    ],
    weekdays: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת']
  },
});

@Component({
  selector: 'app-hospitalized-chart',
  templateUrl: './hospitalized-chart.component.html',
  styleUrls: ['./hospitalized-chart.component.scss'],
})
export class HospitalizedChartComponent implements OnInit {
  @Input() width!: string;
  @Input() height!: string;
  data = [];
  dates: number[] = [];
  lightSick: any[] = [];
  mediumSick: any[] = [];
  harshSick: any[] = [];
  updateFlag = false;
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    title: {
      text: 'מספר מאושפזים יומי',
    },
    series: [
      {
        name: 'חולים קל',
        data: this.lightSick,
        type: 'area',
      },
      {
        name: 'חולים בינוני',
        data: this.mediumSick,
        type: 'area',
      },
      {
        name: 'חולים קשה',
        data: this.harshSick,
        type: 'area',
      },
    ],
    chart: {
      styledMode: true,
    },
    yAxis: {
      title: {
        text: 'מספר מאושפזים',
      },
    },
    xAxis: {
      type: 'datetime',
      labels: {
        format: '{value:%e-%b}',
      },
    },
    plotOptions: {
      area: {
        stacking: 'normal',
      },
    },
  };

  constructor(private dataApiService: DataApiService) {}

  ngOnInit(): void {
    this.dataApiService.getHopitalizedByLatest().subscribe((res) => {
      res = res.reverse();
      res.forEach((value) => {
        const date = new Date(value.תאריך);
        this.lightSick.push({ x: date.getTime(), y: value['חולים קל'] });
        this.mediumSick.push({
          x: date.getTime(),
          y: parseInt(value['חולים בינוני'] + ''),
        });
        this.harshSick.push({
          x: date.getTime(),
          y: parseInt(value['חולים קשה'] + ''),
        });
      });
      this.updateFlag = true;
    });
  }
}
