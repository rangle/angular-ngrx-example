import {ILoadable} from '../loadable/loadable';
import {
  IVideoGame, videoGameMatchesSearchQuery,
  videoGameMatchesFilters
} from '../videoGame/videoGame.interface';
import {
  IVideoGameFilters,
  createDefaultVideoGameFilters
} from './videoGameFilters.interface';

export interface IVideoGameListing extends ILoadable {
  filters: IVideoGameFilters;
  searchQuery: string;
  videoGames: Array<IVideoGame>;
}

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
    .filter(videoGame => videoGameMatchesFilters(videoGame, videoGameListing.filters));
}

export function getVideoGames(videoGameListing: IVideoGameListing) {
  return getFilteredVideoGames(videoGameListing).sort(
    (videoGameA, videoGameB) => videoGameA.title.localeCompare(videoGameB.title)
  );
}

export function getVideoGame(videoGameListing: IVideoGameListing, id: string) {
  return videoGameListing.videoGames.find(videoGame => videoGame.id === id);
}
