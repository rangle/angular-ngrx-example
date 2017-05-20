import { IVideoGame } from '../video-game/video-game.interface';
import { IVideoGameFilters } from './video-game-filters.interface';
import { ILoadable } from '../../../loading/interfaces/loadable/loadable';

export interface IVideoGameListing extends ILoadable {
  filters: IVideoGameFilters;
  searchQuery: string;
  videoGames: Array<IVideoGame>;
}

