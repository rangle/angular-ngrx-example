export interface IVideoGameFilters {
  platform: string;
}

export function createDefaultVideoGameFilters(): IVideoGameFilters {
  return {
    platform: null
  };
}
