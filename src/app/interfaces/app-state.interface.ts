import {IPlatforms, IVideoGameListing} from '../video-games/interfaces';

export interface IAppState {
  readonly platforms: IPlatforms;
  readonly videoGameListing: IVideoGameListing;
}
