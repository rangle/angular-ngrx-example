import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {IVideoGameListing} from '../../interfaces/videoGameListing.interface';
import {IAppState} from '../../interfaces/appState.interface';
import {createAction} from '../../store/createAction';

@Injectable()
export class VideoGameListingStore {

  static RETRIEVE = 'VIDEO_GAME_LISTING_RETRIEVE';
  static RETRIEVE_SUCCESS = 'VIDEO_GAME_LISTING_RETRIEVE_SUCCESS';
  static RETRIEVE_ERROR = 'VIDEO_GAME_LISTING_RETRIEVE_ERROR';

  constructor(private store: Store<IAppState>) {

  }

  getVideoGameListing(): Observable<IVideoGameListing> {
    return this.store.select(appState => appState.videoGameListing);
  }

  retrieve() {
    this.store.dispatch(createAction(VideoGameListingStore.RETRIEVE));
  }

}