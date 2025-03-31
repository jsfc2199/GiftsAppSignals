import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-gift-history',
  imports: [],
  templateUrl: './gift-history--page.component.html',
  styleUrl: './Gift-history.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GiftHistoryComponent {
  query = toSignal(
    inject(ActivatedRoute).params.pipe(map((params) => params['query']))
  ); //convertimos el observable a señal
}
