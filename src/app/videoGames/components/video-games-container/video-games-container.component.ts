import {Component} from '@angular/core';
import {Observable} from 'rxjs';

import {IVideoGameListing} from '../../../interfaces/videoGameListing.interface';
import {VideoGameListingStore} from '../../store/videoGameListing.store';

@Component({
  selector: 'video-games-container',
  templateUrl: './video-games-container.component.html',
  styleUrls: ['./video-games-container.component.scss']
})
export class VideoGamesContainerComponent {

  videoGameListing$: Observable<IVideoGameListing>;

  constructor(private videoGameListingStore: VideoGameListingStore) {
    this.videoGameListing$ = videoGameListingStore.getVideoGameListing();
    this.videoGameListingStore.retrieve();
  }

}