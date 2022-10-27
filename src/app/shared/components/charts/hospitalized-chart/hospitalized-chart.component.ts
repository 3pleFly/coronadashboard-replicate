import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/shared/services/data-api.service';
import * as Highcharts from 'highcharts';
import { Chart } from 'highcharts';
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
    weekdays: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
  },
  tooltip: {
    pointFormatter: function(){
      let point = this;
      let series = point.series;
      return ` <b> ${series.name}: </b>  ${point.y}`
    }
  }
});

@Component({
  selector: 'app-hospitalized-chart',
  templateUrl: './hospitalized-chart.component.html',
  styleUrls: ['./hospitalized-chart.component.scss'],
})
export class HospitalizedChartComponent implements AfterViewInit {
  @Input() width!: number;
  @Input() height!: number;
  lightSick: any[] = [];
  mediumSick: any[] = [];
  harshSick: any[] = [];
  updateFlag = false;

  chart!: Chart;

  constructor(private dataApiService: DataApiService) {}

  ngAfterViewInit(): void {
    this.chart = Highcharts.chart('hospitalized', {
      title: {
        text: 'מספר מאושפזים יומי',
      },
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
    } as any);

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
      this.chart.addSeries({
        name: 'חולים קל',
        type: 'area',
        data: this.lightSick,
      });
      this.chart.addSeries({
        name: 'חולים בינוני',
        type: 'area',
        data: this.mediumSick,
      });
      this.chart.addSeries({
        name: 'חולים קשה',
        type: 'area',
        data: this.harshSick,
      });
    });

  }


}
