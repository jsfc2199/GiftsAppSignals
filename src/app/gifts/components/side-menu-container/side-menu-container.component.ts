import { Component } from '@angular/core';
import { SideMenuComponent } from '../side-menu-options/side-menu.component';
import { GiftsHeaderComponent } from '../gifts-header/gifts-header.component';

@Component({
  selector: 'app-side-menu-container',
  imports: [SideMenuComponent, GiftsHeaderComponent],
  templateUrl: './side-menu-container.component.html',
  styleUrl: './side-menu-container.component.css',
})
export class SideMenuContainerComponent {}
