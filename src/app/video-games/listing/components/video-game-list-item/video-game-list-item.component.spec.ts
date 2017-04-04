import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { inject, async } from '@angular/core/testing';
import { configureTestModule } from '../../../../test/configure-test-module.function';
import { TestComponentSupport } from '../../../../test/test-component-support.class';

import { VideoGameListItemComponent } from './video-game-list-item.component';
import { VideoGameListingStore } from '../../../store/video-game-listing/video-game-listing.store';

describe('video game list item', () => {
  let support: TestComponentSupport<VideoGameListItemComponent>;
  const mockVideoGameListingStore = {
    toggleFavorite: () => { }
  };
  beforeEach(configureTestModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [VideoGameListItemComponent],
    providers: [{
      provide: VideoGameListingStore,
      useValue: mockVideoGameListingStore
    }]
  }));
  beforeEach(() => {
    support = new TestComponentSupport<VideoGameListItemComponent>(VideoGameListItemComponent);
    support.component.videoGame = {
      id: '123',
      title: 'abc',
      favorite: false,
      platform: 'xyz'
    };
    support.detectChanges();
  });
  it('should toggle video game favorite with proper id',
    async(inject([VideoGameListingStore], (videoGameListingStore) => {
      spyOn(videoGameListingStore, 'toggleFavorite');
      support.component.toggleVideoGameFavorite();
      expect(videoGameListingStore.toggleFavorite).toHaveBeenCalledWith('123');
    }))
  );
  it('should show the video game title', () => {
    expect(support.getInnerHtml('h3')).toContain('abc');
  });
  it('should show the platform', () => {
    expect(support.getInnerHtml('.platform')).toContain('xyz');
  });

});
