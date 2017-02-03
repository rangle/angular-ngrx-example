import {Action} from '@ngrx/store';

import {
  createDefaultPlatforms,
  IPlatforms
} from '../../interfaces/platforms/platforms.interface';
import {PlatformsStore} from './platforms.store';

export default function platformsReducer(state: IPlatforms, action: Action): IPlatforms {
  state = state || createDefaultPlatforms();

  switch (action.type) {
    case PlatformsStore.RETRIEVE:
      return Object.assign({}, state, {
        isLoading: true,
        loadingError: null
      });
    case PlatformsStore.RETRIEVE_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        list: action.payload.platforms
      });
    case PlatformsStore.RETRIEVE_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        loadingError: action.payload.error
      });
    default:
      return state;
  }
}
