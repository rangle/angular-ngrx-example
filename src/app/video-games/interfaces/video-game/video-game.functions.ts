import { IVideoGame } from './video-game.interface';
import { IVideoGameFilters } from '../video-game-listing';

export function createVideoGame(
  id: string,
  title: string,
  platform?: string,
  description?: string,
  youtubeUrl?: string,
  imageUrl?: string,
  favorite = false,
) {
  return {id, title, platform, description, youtubeUrl, imageUrl, favorite};
}

function textMatchesSearchQuery(text: string, searchQuery: string) {
  return text ?
    text.toLowerCase().includes(searchQuery.toLowerCase()) :
    false;
}

export function videoGameMatchesSearchQuery(videoGame: IVideoGame, searchQuery: string) {
  if (!Boolean(videoGame)) {
    return false;
  }

  return Boolean(searchQuery) ?
    textMatchesSearchQuery(videoGame.title, searchQuery) ||
    textMatchesSearchQuery(videoGame.description, searchQuery) :
    true;
}

export function videoGameMatchesPlatformFilter(videoGame: IVideoGame, filters: IVideoGameFilters) {
  if (!Boolean(videoGame)) {
    return false;
  }

  return Boolean(filters) && Boolean(filters.platform) ?
    videoGame.platform === filters.platform :
    true;
}

export function videoGameMatchesFavoritesFilter(videoGame: IVideoGame, filters: IVideoGameFilters) {
  if (!Boolean(videoGame)) {
    return false;
  }

  return Boolean(filters) && filters.favorites === true ?
    videoGame.favorite :
    true;
}
