import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {createAction} from '../createAction';
import {IAppState} from '../../interfaces/appState.interface';
import {IPlatforms} from '../../interfaces/platforms/platforms.interface';

@Injectable()
export class PlatformsStore {

  static RETRIEVE = 'PLATFORMS_RETRIEVE';
  static RETRIEVE_SUCCESS = 'PLATFORMS_RETRIEVE_SUCCESS';
  static RETRIEVE_ERROR = 'PLATFORMS_RETRIEVE_ERROR';

  constructor(private store: Store<IAppState>) {

  }

  getPlatforms(): Observable<IPlatforms> {
    return this.store.select(appState => appState.platforms);
  }

  retrieve() {
    this.store.dispatch(createAction(PlatformsStore.RETRIEVE));
  }

}