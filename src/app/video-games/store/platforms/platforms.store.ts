import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {IPlatforms} from '../../interfaces/platforms/platforms.interface';
import {IAppState} from '../../../interfaces/app-state.interface';
import {createAction} from '../../../store/create-action';

@Injectable()
export class PlatformsStore {

  public static RETRIEVE = 'PLATFORMS_RETRIEVE';
  public static RETRIEVE_SUCCESS = 'PLATFORMS_RETRIEVE_SUCCESS';
  public static RETRIEVE_ERROR = 'PLATFORMS_RETRIEVE_ERROR';

  constructor(private store: Store<IAppState>) {

  }

  public getPlatforms(): Observable<IPlatforms> {
    return this.store.select(appState => appState.platforms);
  }

  public retrieve() {
    this.store.dispatch(createAction(PlatformsStore.RETRIEVE));
  }

}
