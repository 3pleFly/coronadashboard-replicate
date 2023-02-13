import { Component, Inject, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/shared/services/data-api.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  sideMenuState: boolean = false;
  theme!: string;

  constructor(private dataApiService: DataApiService, @Inject('MY_TOKEN') private my_token: string) {}

  ngOnInit(): void {
    console.log('mine:', this.my_token);

  }

  toggleTheme(): void {
    if (this.theme) {
      this.theme = '';
    } else {
      this.theme = 'dark';
    }
// this.theme = event?'dark':''
  }

  toggleSideMenu() {}
}
