import {Component} from '@angular/core';
import {Observable} from 'rxjs';

import {VideoGameListingStore} from '../../../../store/videoGameListing/videoGameListing.store';
import {IVideoGame} from '../../../../interfaces/videoGame/videoGame.interface';
import {IPlatforms} from '../../../../interfaces/platforms/platforms.interface';
import {PlatformsStore} from '../../../../store/platforms/platforms.store';

@Component({
  selector: 'video-game-listing-page',
  templateUrl: './video-game-listing-page.component.html',
  styleUrls: ['./video-game-listing-page.component.scss']
})
export class VideoGameListingPageComponent {

  private platforms$: Observable<IPlatforms>;
  private videoGames$: Observable<Array<IVideoGame>>;

  constructor(
    private platformsStore: PlatformsStore,
    private videoGameListingStore: VideoGameListingStore
  ) {
    this.platforms$ = platformsStore.getPlatforms();
    this.videoGames$ = videoGameListingStore.getVideoGames();
  }

  search(query: string) {
    this.videoGameListingStore.search(query);
  }

  filterPlatform(platform: string) {
    this.videoGameListingStore.filterPlatform(platform);
  }

}