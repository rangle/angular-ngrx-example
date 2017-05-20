import { Action } from '@ngrx/store';

import { updateChildObject } from '../../../store/reducer-helpers';
import { VideoGameListingStore } from './video-game-listing.store';
import {
  createDefaultVideoGameListing,
  IVideoGameListing,
} from '../../interfaces';

export function videoGameListingReducer(
  state: IVideoGameListing,
  action: Action
): IVideoGameListing {
  state = state || createDefaultVideoGameListing();

  switch (action.type) {
    case VideoGameListingStore.RETRIEVE:
      return {
        ...state,
        isLoading: true,
        loadingError: null
      };
    case VideoGameListingStore.RETRIEVE_SUCCESS:
      const videoGames = action.payload.videoGames
        .map(game => ({...game, favorite: false}));

      return {
        ...state,
        isLoading: false,
        videoGames: videoGames
      };
    case VideoGameListingStore.RETRIEVE_ERROR:
      return {
        ...state,
        isLoading: false,
        loadingError: action.payload.error
      };
    case VideoGameListingStore.SEARCH:
      return {
        ...state,
        searchQuery: action.payload.query
      };
    case VideoGameListingStore.FILTER_PLATFORM:
      return {
        ...state,
        filters: {
          ...state.filters,
          platform: action.payload.platform
        }
      };
    case VideoGameListingStore.TOGGLE_FAVORITE_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          favorites: !state.filters.favorites
        }
      };
    case VideoGameListingStore.TOGGLE_FAVORITE:
      return {
        ...state,
        videoGames: updateChildObject(
          state.videoGames,
          (game) => game.id === action.payload.id,
          (game) => ({favorite: !game.favorite}),
        )
      };
    default:
      return state;
  }
}
