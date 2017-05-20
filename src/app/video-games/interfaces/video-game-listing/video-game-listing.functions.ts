import { IVideoGameListing } from './video-game-listing.interface';
import { createDefaultVideoGameFilters } from './video-game-filters.functions';
import {
  videoGameMatchesFavoritesFilter,
  videoGameMatchesPlatformFilter,
  videoGameMatchesSearchQuery
} from '../video-game';

export function createDefaultVideoGameListing(): IVideoGameListing {
  return {
    isLoading: false,
    loadingError: null,
    filters: createDefaultVideoGameFilters(),
    searchQuery: null,
    videoGames: []
  };
}

function getFilteredVideoGames(videoGameListing: IVideoGameListing) {
  return videoGameListing.videoGames
    .filter(videoGame => videoGameMatchesSearchQuery(videoGame, videoGameListing.searchQuery))
    .filter(videoGame => videoGameMatchesPlatformFilter(videoGame, videoGameListing.filters))
    .filter(videoGame => videoGameMatchesFavoritesFilter(videoGame, videoGameListing.filters));
}

export function getVideoGames(videoGameListing: IVideoGameListing) {
  return Boolean(videoGameListing) ?
    getFilteredVideoGames(videoGameListing).sort(
      (videoGameA, videoGameB) => videoGameA.title.localeCompare(videoGameB.title)
    ) :
    [];
}

export function getVideoGame(videoGameListing: IVideoGameListing, id: string) {
  return Boolean(videoGameListing) ?
    videoGameListing.videoGames.find(videoGame => videoGame.id === id) :
    null;
}
