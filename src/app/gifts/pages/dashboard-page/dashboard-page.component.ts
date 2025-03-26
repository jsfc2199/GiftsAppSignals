import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuContainerComponent } from "../../components/side-menu-container/side-menu-container.component";

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, SideMenuContainerComponent],
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent {}
