import { IVideoGameFilters } from './video-game-filters.interface';

export function createDefaultVideoGameFilters(): IVideoGameFilters {
  return {
    platform: null,
    favorites: false
  };
}
