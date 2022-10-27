import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Chart } from 'highcharts';
import * as Highcharts from 'highcharts';
import { DataApiService } from 'src/app/shared/services/data-api.service';

@Component({
  selector: 'app-test-results-chart',
  templateUrl: './test-results-chart.component.html',
  styleUrls: ['./test-results-chart.component.scss'],
})
export class TestResultsChartComponent implements AfterViewInit {
  chart!: Chart;

  constructor(private dataApiService: DataApiService) {}

  ngAfterViewInit(): void {
    this.chart = Highcharts.chart('tests', {
      title: {
        text: 'בדיקות קורונה',
      },
      series: [],
      chart: {
        styledMode: true,
      },
      yAxis: {
        title: {
          text: 'מספר בדיקות',
        },
      },
      xAxis: {
        type: 'datetime',
        labels: {
          format: '{value:%e-%b}',
        },
      },
      plotOptions: {
        column: {
          grouping: false,
        },
      },
    });

    this.dataApiService.getCoronaTestResults().subscribe((res) => {
      res = res.reverse();
      let negativeResultMap = new Map();
      let positiveResultMap = new Map();
      res.forEach((value) => {
        const date = new Date(value.result_date).getTime();
        if (value.corona_result === 'שלילי') {
          if (negativeResultMap.has(date)) {
            negativeResultMap.set(date, negativeResultMap.get(date) + 1);
          } else {
            negativeResultMap.set(date, 1);
          }
        } else {
          if (positiveResultMap.has(date)) {
            positiveResultMap.set(date, positiveResultMap.get(date) + 1);
          } else {
            positiveResultMap.set(date, 1);
          }
        }
      });

      //setting some mock data
      positiveResultMap.set(new Date('2022-01-02').getTime(), 435);
      negativeResultMap.set(new Date('2022-01-02').getTime(), 1432);

      positiveResultMap.set(new Date('2022-01-03').getTime(), 654);
      negativeResultMap.set(new Date('2022-01-03').getTime(), 1232);

      positiveResultMap.set(new Date('2022-01-04').getTime(), 478);
      negativeResultMap.set(new Date('2022-01-04').getTime(), 1632);

      positiveResultMap.set(new Date('2022-01-05').getTime(), 804);
      negativeResultMap.set(new Date('2022-01-05').getTime(), 1802);

      this.chart.addSeries({
        name: 'תוצאות שליליות',
        type: 'column',
        data: Array.from(negativeResultMap),
      });
      this.chart.addSeries({
        name: 'תוצאות חיוביות',
        type: 'line',
        data: Array.from(positiveResultMap),
      });
    });
  }
}
