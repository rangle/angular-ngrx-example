import {Action} from '@ngrx/store';

import {VideoGameListingStore} from './video-game-listing.store';
import {
  IVideoGameListing,
  createDefaultVideoGameListing
} from '../../interfaces/video-game-listing/video-game-listing.interface';

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
      const newVideoGames = state.videoGames
        .map(game => {
          return game.id === action.payload.id ?
            {...game, favorite: !game.favorite} : game;
        });

        return {...state, videoGames: newVideoGames};
    default:
      return state;
  }
}
