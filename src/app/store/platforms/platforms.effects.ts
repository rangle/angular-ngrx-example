import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';

import {createAction} from '../createAction';
import {PlatformsService} from '../../videoGames/services/platforms.service';
import {PlatformsStore} from './platforms.store';

@Injectable()
export class PlatformsEffects {

  @Effect()
  private retrieve$ = this.actions$
    .ofType(PlatformsStore.RETRIEVE)
    .mergeMap(() => this.platformsService.getAll()
      .map(platforms => createAction(PlatformsStore.RETRIEVE_SUCCESS, { platforms }))
      .catch(error => Observable.of(createAction(PlatformsStore.RETRIEVE_ERROR, { error })))
    );

  constructor(
    private actions$: Actions,
    private platformsService: PlatformsService
  ) {

  }

}
