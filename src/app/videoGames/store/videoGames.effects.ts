import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs';

import {VideoGameListingStore} from './videoGameListing.store';
import {createAction} from '../../store/createAction';
import {VideoGamesService} from '../services/videoGames.service';

@Injectable()
export class VideoGamesEffects {

  constructor(
    private actions$: Actions,
    private videoGamesService: VideoGamesService
  ) {

  }

  @Effect()
  retrieve$ = this.actions$
    .ofType(VideoGameListingStore.RETRIEVE)
    .mergeMap(() => this.videoGamesService.getAll()
      .map(videoGames => createAction(VideoGameListingStore.RETRIEVE_SUCCESS, { videoGames }))
      .catch(error => Observable.of(createAction(VideoGameListingStore.RETRIEVE_ERROR, error)))
    );

}