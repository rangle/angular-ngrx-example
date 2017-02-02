import {IVideoGameFilters} from '../videoGameListing/videoGameFilters.interface';

export interface IVideoGame {
  id: string;
  title: string;
  platform: string;
  description: string;
  youtubeUrl: string;
}

function videoGameTitleMatches(videoGame: IVideoGame, searchQuery: string) {
  return videoGame.title.toLowerCase().includes(searchQuery.toLowerCase());
}

function videoGameDescriptionMatches(videoGame, searchQuery: string) {
  return videoGame.description.toLowerCase().includes(searchQuery.toLowerCase());
}

export function videoGameMatchesSearchQuery(videoGame, searchQuery: string) {
  return Boolean(searchQuery) ?
    videoGameTitleMatches(videoGame, searchQuery) ||
      videoGameDescriptionMatches(videoGame, searchQuery) :
    true;
}

export function videoGameMatchesFilters(videoGame, filters: IVideoGameFilters) {
  return Boolean(filters.platform) ?
    videoGame.platform === filters.platform :
    true;
}
