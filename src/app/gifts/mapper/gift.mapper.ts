import { Gift } from '../interfaces/gift.interface';
import { GiphyItem } from '../interfaces/giphy.interface';

export class GiftMapper {
  static mapGiphyItemToGift(item: GiphyItem): Gift {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url,
    };
  }

  static mapGiphyItemToGiftArray(items: GiphyItem[]): Gift[] {
    return items.map(this.mapGiphyItemToGift);
  }
}
