import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CardComponent } from './components/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardTableSectionComponent } from './components/table-section/card-table-section.component';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [CardComponent, CardTableSectionComponent, ChartComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FontAwesomeModule,
  ],
  exports: [CardComponent, CardTableSectionComponent,ChartComponent],
})
export class SharedModule {}
