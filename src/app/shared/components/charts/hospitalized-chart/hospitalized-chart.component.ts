import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { DataApiService } from 'src/app/shared/services/data-api.service';
import { dynamicTheme } from '../dynamicTheme';

@Component({
  selector: 'app-hospitalized-chart',
  templateUrl: './hospitalized-chart.component.html',
  styleUrls: ['./hospitalized-chart.component.scss'],
})
export class HospitalizedChartComponent implements OnInit {
  @Input() width!: string;
  @Input() height!: string;

  theme = dynamicTheme;

  options!: EChartsOption;

  constructor(private dataApiService: DataApiService) {}

  ngOnInit(): void {

    const xAxisData: any[] = [];
    const lightSick: any[] = [];
    const  mediumSick: any[] = [];
    const harshSick: any[] = [];

    this.dataApiService.getHopitalizedByLatest().subscribe((res) => {
      res.forEach((hospitalized) => {
        const date = new Date(hospitalized.תאריך);          
        xAxisData.push(date.toDateString().slice(4, date.toDateString().length));
        lightSick.push(hospitalized['חולים קל']);
        mediumSick.push(hospitalized['חולים בינוני']);
        harshSick.push(hospitalized['חולים קשה']);        
      });      
      this.options = {
        
        legend: {
          data: ['חולים קל', 'חולים בינוני', 'חולים קשה'],
          align: 'left',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          boundaryGap: false,
          data: xAxisData,
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'חולים קשה',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: harshSick,
          },
          {
            name: 'חולים בינוני',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: mediumSick,
          },
          {
            name: 'חולים קל',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: lightSick,
          },
        ],
  
      };
    });

    

  }
}
