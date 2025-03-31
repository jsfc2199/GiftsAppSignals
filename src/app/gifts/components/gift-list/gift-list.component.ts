import { Component, input } from '@angular/core';
import { GiftListItemComponent } from "../gift-list-item/gift-list-item.component";
import { Gift } from '../../interfaces/gift.interface';

@Component({
  selector: 'app-gift-list',
  imports: [GiftListItemComponent],
  templateUrl: './gift-list.component.html',
})
export class GiftListComponent {
  gifts = input.required<Gift[]>()
}
