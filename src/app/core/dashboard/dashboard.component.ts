import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  sideMenuState: boolean = false;

  theme: string = '';
  constructor() {}

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
