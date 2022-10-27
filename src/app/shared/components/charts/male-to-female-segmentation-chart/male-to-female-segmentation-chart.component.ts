import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-male-to-female-segmentation-chart',
  templateUrl: './male-to-female-segmentation-chart.component.html',
  styleUrls: ['./male-to-female-segmentation-chart.component.scss'],
})
export class MaleToFemaleSegmentationChartComponent implements OnInit {
  categories = [
    '0-9',
    '10-19',
    '20-29',
    '30-39',
    '40-49',
    '50-59',
    '60-69',
    '70-79',
    '80-89',
    '90+',
  ];
  chart!: Highcharts.Chart;

  constructor() {}

  ngOnInit(): void {
    this.chart = Highcharts.chart('segmentation', {
      series: [
        {
          name: 'גברים',
          type: 'bar',
          data: [1.5, 3.1, 5.2, 6, 7.2, 8.5, 10.4, 10.9, 5.2, 1.4],
        },
        {
          name: 'נשים',
          type: 'bar',
          data: [-1.4, -2.2, -3, -4.4, -4.4, -4.8, -7, -8.5, -3.8, -0.8],
        },
      ],
      chart: {
        type: 'bar',
        styledMode: true,

      },
      title: {
        text: 'פילוח מדדים שונים על פי גיל ומין',
      },
      xAxis: [
        {
          categories: this.categories,
          reversed: false,
        },
        {
          opposite: true,
          reversed: false,
          categories: this.categories,
          linkedTo: 0,
        },
      ],
      yAxis: {
        title: {
          text: '% סה"כ',
        },
        labels: {
          formatter: (label) => {
            return Math.abs(parseInt(label.value + '')) + '%';
          },
        },
      },

      plotOptions: {
        series: {
          stacking: 'normal',
        },
      },
      tooltip: {
        formatter: function () {
          return (
            '<b>' +
            Math.abs(parseFloat(this.point.y + '')) +
            '%</b>' +
            ' ' +
            this.series.name
          );
        },
      },
    });
  }
}
