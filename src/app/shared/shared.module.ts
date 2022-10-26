import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CardComponent } from './components/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardTableSectionComponent } from './components/table-section/card-table-section.component';
import { HospitalizedChartComponent } from './components/charts/hospitalized-chart/hospitalized-chart.component';
import { IsolationChartComponent } from './components/charts/isolation-chart/isolation-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    CardComponent,
    CardTableSectionComponent,
    HospitalizedChartComponent,
    IsolationChartComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FontAwesomeModule,
    HighchartsChartModule,
  ],
  exports: [
    CardComponent,
    CardTableSectionComponent,
    HospitalizedChartComponent,
    IsolationChartComponent,
  ],
})
export class SharedModule {}
