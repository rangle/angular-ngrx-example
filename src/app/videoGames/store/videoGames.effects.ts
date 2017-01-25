import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs';

import {VideoGameListingStore} from './videoGames.store';
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
    .mergeMap<Action>(action => this.videoGamesService.getAll()
      .map(videoGames => createAction(VideoGameListingStore.RETRIEVE_SUCCESS, { videoGames }))
      .catch(error => Observable.of(createAction(VideoGameListingStore.RETRIEVE_ERROR, error)))
    );

}