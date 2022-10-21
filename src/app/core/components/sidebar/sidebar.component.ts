import { Component, EnvironmentInjector, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() sideMenuState: boolean = false;
  menudata = environment.sidemenuItems;

  constructor() {}

  ngOnInit(): void {}


}
