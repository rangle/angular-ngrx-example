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
      return Object.assign({}, state, {
        isLoading: true,
        loadingError: null
      });
    case VideoGameListingStore.RETRIEVE_SUCCESS:
      const videoGames = action.payload.videoGames
        .map(game => Object.assign({}, game, {favorite: false}));

      return Object.assign({}, state, {
        isLoading: false,
        videoGames: videoGames
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
    case VideoGameListingStore.TOGGLE_FAVORITE:
      const newVideoGames = state.videoGames
        .map(game => {
          return game.id === action.payload.id ?
            Object.assign({}, game, {favorite: !game.favorite}) :
            game;
        });

        return Object.assign({}, state, {videoGames: newVideoGames});
    default:
      return state;
  }
}
