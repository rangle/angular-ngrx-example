import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';

import {VideoGameListingStore} from './videoGameListing.store';
import {createAction} from '../createAction';
import {VideoGamesService} from '../../videoGames/services/videoGames.service';

@Injectable()
export class VideoGameListingEffects {

  @Effect()
  private retrieve$ = this.actions$
    .ofType(VideoGameListingStore.RETRIEVE)
    .mergeMap(() => this.videoGamesService.getAll()
      .map(videoGames => createAction(VideoGameListingStore.RETRIEVE_SUCCESS, { videoGames }))
      .catch(error => Observable.of(createAction(VideoGameListingStore.RETRIEVE_ERROR, { error })))
    );

  constructor(
    private actions$: Actions,
    private videoGamesService: VideoGamesService
  ) {

  }

}
