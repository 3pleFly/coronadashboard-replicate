import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() toggleThemeEvent = new EventEmitter<true>();
  themeButtonColorToggle: boolean = false;
  sideMenuState: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleTheme(): void {
    this.toggleThemeEvent.emit(true);
    this.themeButtonColorToggle = !this.themeButtonColorToggle;

  }

  transformBurger(hamburger: HTMLElement) {
    hamburger.classList.toggle('active');
    this.sideMenuState = !this.sideMenuState;
  }


  onScroll(element: HTMLElement, $event: any): void {    
    // element.scrollLeft += $event.deltaY;

 } 
}
