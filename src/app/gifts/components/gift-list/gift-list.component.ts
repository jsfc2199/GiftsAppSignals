import { Component } from '@angular/core';
import { GiftListItemComponent } from "../gift-list-item/gift-list-item.component";

@Component({
  selector: 'app-gift-list',
  imports: [GiftListItemComponent],
  templateUrl: './gift-list.component.html',
  styleUrl: './gift-list.component.css'
})
export class GiftListComponent {

}
