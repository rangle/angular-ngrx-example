export interface IVideoGameFilters {
  platform: string;
  favorites: boolean;
}

export function createDefaultVideoGameFilters(): IVideoGameFilters {
  return {
    platform: null,
    favorites: false
  };
}
