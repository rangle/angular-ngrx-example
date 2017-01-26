import {IVideoGame} from '../videoGame/videoGame.interface';
import {ILoadable} from '../loadable/loadable';

export interface IVideoGameListing extends ILoadable {
  videoGames?: Array<IVideoGame>;
}