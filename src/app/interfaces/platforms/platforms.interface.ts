import {ILoadable} from '../loadable/loadable';

export interface IPlatforms extends ILoadable {
  readonly list: Array<string>;
}

export function createDefaultPlatforms(): IPlatforms {
  return {
    isLoading: false,
    loadingError: null,
    list: []
  };
}