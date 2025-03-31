import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GiftService } from '../../services/gifts.service';
import { GiftListComponent } from "../../components/gift-list/gift-list.component";

@Component({
  selector: 'app-gift-history',
  imports: [GiftListComponent],
  templateUrl: './gift-history--page.component.html',
  styleUrl: './Gift-history.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GiftHistoryComponent {
  query = toSignal(
    inject(ActivatedRoute).params.pipe(map((params) => params['query']))
  ); //convertimos el observable a señal

  giftService = inject(GiftService);
  giftsByKey = computed(() => {
    return this.giftService.getHistoryGifts(this.query());
  });
}
