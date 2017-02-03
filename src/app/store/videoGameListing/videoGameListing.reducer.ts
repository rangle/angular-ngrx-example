import {Action} from '@ngrx/store';

import {VideoGameListingStore} from './videoGameListing.store';
import {
  IVideoGameListing,
  createDefaultVideoGameListing
} from '../../interfaces/videoGameListing/videoGameListing.interface';

export default function videoGameListingReducer(
  state: IVideoGameListing,
  action: Action
): IVideoGameListing {
  state = state || createDefaultVideoGameListing();

  switch (action.type) {
    case VideoGameListingStore.RETRIEVE:
      return Object.assign({}, state, {
        isLoading: true,
        loadingError: null
      });
    case VideoGameListingStore.RETRIEVE_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        videoGames: action.payload.videoGames
      });
    case VideoGameListingStore.RETRIEVE_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        loadingError: action.payload.error
      });
    case VideoGameListingStore.SEARCH:
      return Object.assign({}, state, {
        searchQuery: action.payload.query
      });
    case VideoGameListingStore.FILTER_PLATFORM:
      return Object.assign({}, state, {
        filters: Object.assign({}, state.filters, {
          platform: action.payload.platform
        })
      });
    default:
      return state;
  }
}
