import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/shared/services/data-api.service';
import * as Highcharts from 'highcharts';
import { Chart } from 'highcharts';

@Component({
  selector: 'app-isolation-chart',
  templateUrl: './isolation-chart.component.html',
  styleUrls: ['./isolation-chart.component.scss'],
})
export class IsolationChartComponent implements AfterViewInit {
  @Input() width!: string;
  @Input() height!: string;

  updateFlag = false;
  chart!: Chart;

  constructor(private dataApiService: DataApiService) {}

  ngAfterViewInit(): void {
    this.chart = Highcharts.chart('isolation', {
      title: {
        text: 'מבודדים מחו"ל',
      },
      series: [],
      chart: {
        styledMode: true,
      },
      yAxis: {
        title: {
          text: 'מספר מבודדים',
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
    });

    this.dataApiService.getIsolationsByLatest().subscribe((res) => {
      res = res.reverse();
      const isolatedTotal: any[] = [];
      const isolatedTodayFromAbroad: any[] = []; 
      res.forEach((value) => {
        const date = new Date(value.date);
        isolatedTotal.push({ x: date.getTime(), y: parseInt(value.isolated_today_abroad + "") });
        isolatedTodayFromAbroad.push({x: date.getTime(), y: parseInt(value.new_from_abroad + "")}); 
        
      });    
         
      this.chart.addSeries({
        name: 'סה"כ מבודדים מחו"ל',
        type: 'bar',
        data: isolatedTotal
      });
      this.chart.addSeries({
        name: 'מבודדים חדשים מחו"ל',
        type: 'bar',
        data: isolatedTodayFromAbroad
      });
    });
  }
}
