import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() toggleThemeEvent = new EventEmitter<true>();
  sideMenuState: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleTheme(): void {
    this.toggleThemeEvent.emit(true);
  }

  transformBurger(hamburger: HTMLElement) {
    hamburger.classList.toggle('active');
    this.sideMenuState = !this.sideMenuState;
  }
}
