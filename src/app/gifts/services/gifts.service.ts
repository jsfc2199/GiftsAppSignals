import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { GiphyReponse } from '../interfaces/giphy.interface';

@Injectable({ providedIn: 'root' })
export class GiftService {
  constructor() {
    this.loadTrendingGifts();
  }

  private http = inject(HttpClient)

  loadTrendingGifts(){
    this.http.get<GiphyReponse>(`${environment.url}/gifs/trending`, {
      params: {
        api_key: environment.apiKey,
        limit: 20,
      }
    })
  }
}
