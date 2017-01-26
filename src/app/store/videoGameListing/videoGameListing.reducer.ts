import {Action} from '@ngrx/store';

import {VideoGameListingStore} from './videoGameListing.store';
import {IVideoGameListing} from '../../interfaces/videoGameListing/videoGameListing.interface';

export default function videoGameListingReducer(
  state: IVideoGameListing,
  action: Action
): IVideoGameListing {
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
    default:
      return state;
  }
}