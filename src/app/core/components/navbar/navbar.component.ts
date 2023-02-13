import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() toggleThemeEvent = new EventEmitter<true>();
  themeButtonColorToggle: boolean = false;
  sideMenuState: boolean = false;
  currentActive: number = 1;
  title: string = 'hello;'

  // 0 - overview
  // 600 מדדים מרכזיים
  // 1100 - מדדי תחלואה
  //1550 - תחלואה ואשפוזי
  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
    if (window.pageYOffset < 600) {
      this.currentActive = 1;
    }
    if (window.pageYOffset >= 600 && window.pageYOffset <= 1100) {
      this.currentActive = 2;
    }
    if (window.pageYOffset >= 1100 && window.pageYOffset <= 1550) {
      this.currentActive = 3;
    }
  }

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

  scrollNavigate(scrollNumber: number) {
    switch (scrollNumber) {
      case 1:
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 2:
        window.scrollTo({ top: 600, behavior: 'smooth' });
        break;
      case 3:
        window.scrollTo({ top: 1100, behavior: 'smooth' });
        break;
      case 4:
        window.scrollTo({ top: 1550, behavior: 'smooth' });
    }
  }
}
