import videoGameListingReducer from '../videoGames/store/videoGameListing.reducer';

export const rootReducer = {
  videoGameListing: videoGameListingReducer,
  videoGameDetail: videoGameDetailReducer
};