import { createAction } from '../../../store/create-action';
import { videoGameListingReducer } from './video-game-listing.reducer';
import { VideoGameListingStore } from './video-game-listing.store';
import {
  createDefaultVideoGameListing,
  createVideoGame,
  IVideoGameListing,
} from '../../interfaces';

describe('videoGameListingReducer(falsy, unknownAction)', () => {
  const unknownAction = createAction('UNKNOWN');

  it('returns the default state', () => {
    const videoGameListing = videoGameListingReducer(null, unknownAction);
    expect(videoGameListing).toEqual(createDefaultVideoGameListing());
  });
});

describe('videoGameListingReducer(videoGameListing, retrieveAction)', () => {
  const videoGameListing: IVideoGameListing = {
    ...createDefaultVideoGameListing(),
    loadingError: 'Error'
  };
  const retrieveAction = createAction(VideoGameListingStore.RETRIEVE);

  it('sets isLoading to true', () => {
    const newVideoGameListing = videoGameListingReducer(videoGameListing, retrieveAction);
    expect(newVideoGameListing.isLoading).toEqual(true);
  });

  it('clears out existing errors', () => {
    const newVideoGameListing = videoGameListingReducer(videoGameListing, retrieveAction);
    expect(newVideoGameListing.loadingError).toBeNull();
  });
});

describe('videoGameListingReducer(videoGameListing, retrieveSuccessAction)', () => {
  const videoGameListing = {
    ...createDefaultVideoGameListing(),
    isLoading: true
  };
  const retrieveSuccessAction = createAction(VideoGameListingStore.RETRIEVE_SUCCESS, {
    videoGames: [createVideoGame('1', 'Super Mario')]
  });

  it('set the videoGameListing list', () => {
    const newVideoGameListing = videoGameListingReducer(videoGameListing, retrieveSuccessAction);
    expect(newVideoGameListing.videoGames).toEqual([createVideoGame('1', 'Super Mario')]);
  });

  it('should set isLoading to false', () => {
    const newVideoGameListing = videoGameListingReducer(videoGameListing, retrieveSuccessAction);
    expect(newVideoGameListing.isLoading).toEqual(false);
  });
});

describe('videoGameListingReducer(videoGameListing, retrieveErrorAction)', () => {
  const videoGameListing = {
    ...createDefaultVideoGameListing(),
    isLoading: true
  };
  const retrieveErrorAction = createAction(VideoGameListingStore.RETRIEVE_ERROR, {
    error: 'Error Message'
  });

  it('set the loading error', () => {
    const newVideoGameListing = videoGameListingReducer(videoGameListing, retrieveErrorAction);
    expect(newVideoGameListing.loadingError).toEqual('Error Message');
  });

  it('should set isLoading to false', () => {
    const newVideoGameListing = videoGameListingReducer(videoGameListing, retrieveErrorAction);
    expect(newVideoGameListing.isLoading).toEqual(false);
  });
});

describe('videoGameListingReducer(videoGameListing, searchAction)', () => {
  const videoGameListing = createDefaultVideoGameListing();
  const searchAction = createAction(VideoGameListingStore.SEARCH, {
    query: 'Super'
  });

  it('set the search query', () => {
    const newVideoGameListing = videoGameListingReducer(videoGameListing, searchAction);
    expect(newVideoGameListing.searchQuery).toEqual('Super');
  });
});

describe('videoGameListingReducer(videoGameListing, filterPlatformAction)', () => {
  const videoGameListing = createDefaultVideoGameListing();
  const filterPlatformAction = createAction(VideoGameListingStore.FILTER_PLATFORM, {
    platform: 'Nintendo Switch'
  });

  it('set the search query', () => {
    const newVideoGameListing = videoGameListingReducer(videoGameListing, filterPlatformAction);
    expect(newVideoGameListing.filters.platform).toEqual('Nintendo Switch');
  });
});

describe('videoGameListingReducer(videoGameListing, filterFavoritesAction)', () => {
  const videoGameListing = createDefaultVideoGameListing();
  const filterFavoritesAction = createAction(VideoGameListingStore.TOGGLE_FAVORITE_FILTER);

  it('favorites filter should be false', () => {
    expect(videoGameListing.filters.favorites).toEqual(false);
  });

  it('favorites filter should be true', () => {
    const newVideoGameListing = videoGameListingReducer(videoGameListing, filterFavoritesAction);
    expect(newVideoGameListing.filters.favorites).toEqual(true);
  });
});

describe('videoGameListingReducer(videoGameListing, toggleFavouriteAction)', () => {
  const videoGameListing = {
    ...createDefaultVideoGameListing(),
    videoGames: [
      createVideoGame('1', 'Legend of Zelda')
    ]
  };

  it('should be false', () => {
    expect(videoGameListing.videoGames[0].favorite).toEqual(false);
  });

  it('should set the "Legend of Zelda" favorite property to true', () => {
    const toggleFavoriteAction = createAction(VideoGameListingStore.TOGGLE_FAVORITE, {id: '1'});
    const newVideoGameListing = videoGameListingReducer(videoGameListing, toggleFavoriteAction);
    expect(newVideoGameListing.videoGames[0].favorite).toEqual(true);
  });
});
