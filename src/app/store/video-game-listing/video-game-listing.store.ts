import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {createAction} from '../create-action';
import {IAppState} from '../../interfaces/app-state.interface';
import {
  IVideoGameListing,
  getVideoGames,
  getVideoGame
} from '../../interfaces/video-game-listing/video-game-listing.interface';
import {IVideoGame} from '../../interfaces/video-game/video-game.interface';

@Injectable()
export class VideoGameListingStore {

  public static RETRIEVE = 'VIDEO_GAME_LISTING_RETRIEVE';
  public static RETRIEVE_SUCCESS = 'VIDEO_GAME_LISTING_RETRIEVE_SUCCESS';
  public static RETRIEVE_ERROR = 'VIDEO_GAME_LISTING_RETRIEVE_ERROR';
  public static SEARCH = 'VIDEO_GAME_LISTING_SEARCH';
  public static FILTER_PLATFORM = 'VIDEO_GAME_LISTING_FILTER_PLATFORM';

  constructor(private store: Store<IAppState>) {

  }

  public getVideoGameListing(): Observable<IVideoGameListing> {
    return this.store.select(appState => appState.videoGameListing);
  }

  public getVideoGames(): Observable<Array<IVideoGame>> {
    return this.getVideoGameListing()
      .map(videoGameListing => getVideoGames(videoGameListing));
  }

  public getVideoGame(id: string): Observable<IVideoGame> {
    return this.getVideoGameListing()
      .map(videoGameListing => getVideoGame(videoGameListing, id));
  }

  public retrieve() {
    this.store.dispatch(createAction(VideoGameListingStore.RETRIEVE));
  }

  public search(query: string) {
    this.store.dispatch(createAction(VideoGameListingStore.SEARCH, { query }));
  }

  public filterPlatform(platform: string) {
    this.store.dispatch(createAction(VideoGameListingStore.FILTER_PLATFORM, { platform }));
  }

}
