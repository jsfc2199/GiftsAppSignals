import { Component, inject } from '@angular/core';
import { GiftListComponent } from "../../components/gift-list/gift-list.component";
import { GiftService } from '../../services/gifts.service';

@Component({
  selector: 'app-search-page',
  imports: [GiftListComponent],
  templateUrl: './search-page.component.html',
})
export class SearchPageComponent {

  private giftService: GiftService = inject(GiftService)

  onSearch(query: string){
    this.giftService.searchGifts(query)
  }
 }
