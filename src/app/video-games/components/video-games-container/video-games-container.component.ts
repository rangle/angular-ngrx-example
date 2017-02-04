import {Component} from '@angular/core';

import {PlatformsStore} from '../../store/platforms/platforms.store';
import {VideoGameListingStore} from '../../store/video-game-listing/video-game-listing.store';

@Component({
  selector: 'app-video-games-container',
  templateUrl: './video-games-container.component.html',
  styleUrls: ['./video-games-container.component.scss']
})
export class VideoGamesContainerComponent {

  constructor(
    private platformsStore: PlatformsStore,
    private videoGameListingStore: VideoGameListingStore
  ) {
    this.platformsStore.retrieve();
    this.videoGameListingStore.retrieve();
  }

}
