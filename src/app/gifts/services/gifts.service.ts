import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { GiphyReponse } from '../interfaces/giphy.interface';
import { Gift } from '../interfaces/gift.interface';
import { GiftMapper } from '../mapper/gift.mapper';
import { map, tap } from 'rxjs';

const loadFromLocalStorage = () => {
  const giftFromLocalStorage = localStorage.getItem('gifts') ?? '{}'
  const gifts = JSON.parse(giftFromLocalStorage)

  return gifts
}
@Injectable({ providedIn: 'root' })
export class GiftService {
  constructor() {
    this.loadTrendingGifts();
  }

  saveGiftsToLocalStorage = effect(() => {
    const historyString = JSON.stringify(this.searchHistory());
    localStorage.setItem('gifts', historyString)
  })

  private http = inject(HttpClient);

  trendingGifts = signal<Gift[]>([]);
  trendingGiftsLoading = signal<boolean>(true);

  searchHistory = signal<Record<string, Gift[]>>(loadFromLocalStorage());
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  loadTrendingGifts() {
    return this.http
      .get<GiphyReponse>(`${environment.url}/gifs/trending`, {
        params: {
          api_key: environment.apiKey,
          limit: 20,
        },
      })
      .subscribe((resp) => {
        const gifts = GiftMapper.mapGiphyItemToGiftArray(resp.data);
        this.trendingGifts.set(gifts);
        this.trendingGiftsLoading.set(false);
      });
  }

  searchGifts(query: string) {
    return this.http
      .get<GiphyReponse>(`${environment.url}/gifs/search`, {
        params: {
          api_key: environment.apiKey,
          q: query,
          limit: 20,
        },
      })
      .pipe(
        map((resp) => {
          const gifts = GiftMapper.mapGiphyItemToGiftArray(resp.data);
          return gifts;
        }),
        tap((items) => {
          this,
            this.searchHistory.update((history) => ({
              ...history,
              [query.toLowerCase()]: items,
            }));
        })
      );
  }

  getHistoryGifts(query: string) {
    return this.searchHistory()[query] ?? [];
  }
}
