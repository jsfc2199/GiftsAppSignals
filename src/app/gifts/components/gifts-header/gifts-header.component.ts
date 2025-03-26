import { Component } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-gifts-header',
  imports: [],
  templateUrl: './gifts-header.component.html',
})
export class GiftsHeaderComponent {

  envs = environment;
}
