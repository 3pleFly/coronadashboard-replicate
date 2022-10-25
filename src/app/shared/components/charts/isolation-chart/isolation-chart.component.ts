import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { DataApiService } from 'src/app/shared/services/data-api.service';

@Component({
  selector: 'app-isolation-chart',
  templateUrl: './isolation-chart.component.html',
  styleUrls: ['./isolation-chart.component.scss'],
})
export class IsolationChartComponent implements OnInit {
  @Input() width!: string;
  @Input() height!: string;

  options!: EChartsOption;

  constructor(private dataApiService: DataApiService) {}
  ngOnInit(): void {
    const xAxisData: any[] = [];
    const isolated_abroad: any[] = [];
    const isolated_today_from_abroad: any[] = [];

    this.dataApiService.getIsolationsByLatest().subscribe((res) => {
      res.forEach(item => {
        const date = new Date(item.date);
        xAxisData.push(date.toDateString().slice(4, date.toDateString().length));
        isolated_abroad.push(item.isolated_today_abroad); 
        isolated_today_from_abroad.push(item.new_from_abroad);
      });      
      this.options = {
        
        legend: {
          data: ['סה"כ מבודדים ששהו בחו"ל', 'מבודדים חדשים מחו"ל'],
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
            name: 'סה"כ מבודדים ששהו בחו"ל',
            type: 'bar',
            stack: 'Total',
            emphasis: {
              focus: 'series'
            },
            data: isolated_abroad,
          },
          {
            name: 'מבודדים חדשים מחו"ל',
            type: 'line',
            stack: 'Total',
            emphasis: {
              focus: 'series'
            },
            data: isolated_today_from_abroad,
          }
        ],
  
      };
    });
      
  }
}
