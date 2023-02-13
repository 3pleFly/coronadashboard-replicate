import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { SharedRoutingModule } from './shared-routing.module';
import { CardComponent } from './components/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardTableSectionComponent } from './components/table-section/card-table-section.component';
import { HospitalizedChartComponent } from './components/charts/hospitalized-chart/hospitalized-chart.component';
import { IsolationChartComponent } from './components/charts/isolation-chart/isolation-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { TestResultsChartComponent } from './components/charts/test-results-chart/test-results-chart.component';
import { MaleToFemaleSegmentationChartComponent } from './components/charts/male-to-female-segmentation-chart/male-to-female-segmentation-chart.component';
import { RFactorChartComponent } from './components/charts/r-factor-chart/r-factor-chart.component';
import { VaccinationByCityTableComponent } from './components/tables/vaccination-by-city-table/vaccination-by-city-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    CardComponent,
    CardTableSectionComponent,
    HospitalizedChartComponent,
    IsolationChartComponent,
    TestResultsChartComponent,
    MaleToFemaleSegmentationChartComponent,
    RFactorChartComponent,
    VaccinationByCityTableComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FontAwesomeModule,
    HighchartsChartModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    CardComponent,
    CardTableSectionComponent,
    HospitalizedChartComponent,
    IsolationChartComponent,
    TestResultsChartComponent,
    MaleToFemaleSegmentationChartComponent,
    RFactorChartComponent,
    VaccinationByCityTableComponent,
  ],
})
export class SharedModule {}
