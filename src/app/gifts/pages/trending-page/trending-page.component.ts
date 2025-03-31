import { Component, inject } from '@angular/core';
import { GiftListComponent } from "../../components/gift-list/gift-list.component";
import { GiftService } from '../../services/gifts.service';


@Component({
  selector: 'app-trending-page',
  imports: [GiftListComponent],
  templateUrl: './trending-page.component.html',
})
export class TrendingPageComponent {
  imageUrls: string[] = [

  ];

  giftsService = inject(GiftService);



}
