import {Component} from '@angular/core';
import {Observable} from 'rxjs';

import {VideoGameListingStore} from '../../../../store/videoGameListing/videoGameListing.store';
import {IVideoGame} from '../../../../interfaces/videoGame/videoGame.interface';

@Component({
  selector: 'video-game-listing-page',
  templateUrl: './video-game-listing-page.component.html',
  styleUrls: ['./video-game-listing-page.component.scss']
})
export class VideoGameListingPageComponent {

  private videoGames$: Observable<Array<IVideoGame>>;

  constructor(private videoGameListingStore: VideoGameListingStore) {
    this.videoGames$ = videoGameListingStore.getVideoGames();
  }

  search(query: string) {
    this.videoGameListingStore.search(query);
  }

}