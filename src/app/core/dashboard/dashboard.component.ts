import { Component, OnInit } from '@angular/core';
import { ThemeOption } from 'ngx-echarts';
import { DataApiService } from 'src/app/shared/services/data-api.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  sideMenuState: boolean = false;
  theme!: string | ThemeOption;

  constructor(private dataApiService: DataApiService) {
    this.dataApiService.getHopitalizedByLatest().subscribe((res) => {
      console.log(res);
      
      
    })
  }

  ngOnInit(): void {}

  toggleTheme(): void {
    if (this.theme) {
      this.theme = '';
    } else {
      this.theme = 'dark';
    }
  }

  toggleSideMenu() {
    
  }


}
