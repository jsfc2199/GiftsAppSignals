import { Component, inject, signal } from '@angular/core';
import { GiftListComponent } from "../../components/gift-list/gift-list.component";
import { GiftService } from '../../services/gifts.service';
import { Gift } from '../../interfaces/gift.interface';
import { GiftMapper } from '../../mapper/gift.mapper';

@Component({
  selector: 'app-search-page',
  imports: [GiftListComponent],
  templateUrl: './search-page.component.html',
})
export class SearchPageComponent {

  private giftService: GiftService = inject(GiftService)

  gifts = signal<Gift[]>([])

  onSearch(query: string){
    this.giftService.searchGifts(query)
    .subscribe((resp) => {
      this.gifts.set(resp)
    });
  }
 }
