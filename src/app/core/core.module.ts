import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CollapsingMenuComponent } from './components/collapsing-menu/collapsing-menu.component';

@NgModule({
  declarations: [DashboardComponent, NavbarComponent, SidebarComponent, CollapsingMenuComponent],
  imports: [CommonModule, CoreRoutingModule, SharedModule,FontAwesomeModule],
})
export class CoreModule {}
