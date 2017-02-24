import {Action} from '@ngrx/store';

import {
  createDefaultPlatforms,
  IPlatforms
} from '../../interfaces/platforms/platforms.interface';
import {PlatformsStore} from './platforms.store';

export function platformsReducer(state: IPlatforms, action: Action): IPlatforms {
  state = state || createDefaultPlatforms();

  switch (action.type) {
    case PlatformsStore.RETRIEVE:
      return {
        ...state,
        isLoading: true,
        loadingError: null
      };
    case PlatformsStore.RETRIEVE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.payload.platforms
      };
    case PlatformsStore.RETRIEVE_ERROR:
      return {
        ...state,
        isLoading: false,
        loadingError: action.payload.error
      };
    default:
      return state;
  }
}
