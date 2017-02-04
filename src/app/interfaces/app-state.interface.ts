import {IVideoGameListing} from './video-game-listing/video-game-listing.interface';
import {IPlatforms} from './platforms/platforms.interface';

export interface IAppState {
  readonly platforms: IPlatforms;
  readonly videoGameListing: IVideoGameListing;
}
