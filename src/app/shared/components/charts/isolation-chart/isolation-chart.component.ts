import { Component, Input, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/shared/services/data-api.service';

@Component({
  selector: 'app-isolation-chart',
  templateUrl: './isolation-chart.component.html',
  styleUrls: ['./isolation-chart.component.scss'],
})
export class IsolationChartComponent implements OnInit {
  @Input() width!: string;
  @Input() height!: string;

  constructor(private dataApiService: DataApiService) {}
  ngOnInit(): void {
   
      
  }
}
