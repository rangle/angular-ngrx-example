import {IVideoGame} from '../videoGames/interfaces/videoGame.interface';
import {ILoadable} from './loadable';

export interface IVideoGameListing extends ILoadable {
  videoGames?: Array<IVideoGame>;
}