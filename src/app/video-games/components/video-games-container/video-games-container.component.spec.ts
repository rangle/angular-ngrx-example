import { VideoGamesContainerComponent } from './video-games-container.component';
import { PlatformsStore } from '../../store/platforms/platforms.store';
import { VideoGameListingStore } from '../../store/video-game-listing/video-game-listing.store';

let mockPlatformsStore;
let mockVideoGameListingStore;

describe('the video game container', () => {
  beforeEach(() => {
    mockPlatformsStore = {
      retrieve: () => null
    };
    mockVideoGameListingStore = {
      retrieve: () => null
    };

    spyOn(mockPlatformsStore, 'retrieve');
    spyOn(mockVideoGameListingStore, 'retrieve');

    const videoGamesContainerComponent =
      new VideoGamesContainerComponent(mockPlatformsStore, mockVideoGameListingStore);
  });

  it('should retrieve data from the store', () => {
    expect(mockPlatformsStore.retrieve).toHaveBeenCalledTimes(1);
    expect(mockVideoGameListingStore.retrieve).toHaveBeenCalledTimes(1);
  });
});

