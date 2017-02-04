import {ILoadable} from '../../../interfaces/loadable';
import {
  IVideoGame, videoGameMatchesSearchQuery,
  videoGameMatchesFilters
} from '../video-game/video-game.interface';
import {
  IVideoGameFilters,
  createDefaultVideoGameFilters
} from './video-game-filters.interface';

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
