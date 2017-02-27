import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {IPlatforms} from '../../../interfaces/platforms/platforms.interface';
import {IVideoGame} from '../../../interfaces/video-game/video-game.interface';
import {PlatformsStore} from '../../../store/platforms/platforms.store';
import {VideoGameListingStore} from '../../../store/video-game-listing/video-game-listing.store';
import {IVideoGameFilters} from '../../../interfaces/video-game-listing/video-game-filters.interface';

@Component({
  selector: 'app-video-game-listing-page',
  templateUrl: './video-game-listing-page.component.html',
  styleUrls: ['./video-game-listing-page.component.scss']
})
export class VideoGameListingPageComponent {

  private platforms$: Observable<IPlatforms>;
  private videoGames$: Observable<Array<IVideoGame>>;
  private videoGameFilters$: Observable<IVideoGameFilters>;

  constructor(
    private platformsStore: PlatformsStore,
    private videoGameListingStore: VideoGameListingStore
  ) {
    this.platforms$ = platformsStore.getPlatforms();
    this.videoGames$ = videoGameListingStore.getVideoGames();
    this.videoGameFilters$ = videoGameListingStore.getVideoGameFilters();
  }

  public search(query: string) {
    this.videoGameListingStore.search(query);
  }

  public filterPlatform(platform: string) {
    this.videoGameListingStore.filterPlatform(platform);
  }

  public filterFavorites() {
    this.videoGameListingStore.toggleFavoriteFilter();
  }

}
