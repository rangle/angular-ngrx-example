import {IVideoGameListing} from './videoGameListing/videoGameListing.interface';
import {IPlatforms} from './platforms/platforms.interface';

export interface IAppState {
  readonly platforms: IPlatforms;
  readonly videoGameListing: IVideoGameListing;
}
