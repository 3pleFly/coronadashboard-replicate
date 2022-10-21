import { Component, Input, OnInit } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-collapsing-menu',
  templateUrl: './collapsing-menu.component.html',
  styleUrls: ['./collapsing-menu.component.scss'],
})
export class CollapsingMenuComponent implements OnInit {
  faAngleLeft = faAngleLeft;
  @Input() menuTitle!: string;
  @Input() menuItems!: string[];
  sidemenuToggle: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleSubmenu(icon: FaIconComponent) {
    if (icon.rotate) {
      icon.rotate = undefined;
    } else {
      icon.rotate = 270;
    }
    this.sidemenuToggle = !this.sidemenuToggle;
    icon.render();
  }
}
