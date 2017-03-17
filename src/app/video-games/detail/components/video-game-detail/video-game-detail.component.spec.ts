import { Location } from '@angular/common';
import { async, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { configureTestModule } from '../../../../test/configure-test-module.function';
import { TestComponentSupport } from '../../../../test/test-component-support.class';

import { VideoGameDetailComponent } from './video-game-detail.component';
import { VideoGameListingStore } from '../../../store/video-game-listing/video-game-listing.store';

let support: TestComponentSupport<VideoGameDetailComponent>;

describe('video game component', () => {
  const mockLocation = {
    back: () => { }
  };
  const mockVideoGameListingStore = {
    toggleFavorite: () => { }
  };
  beforeEach(configureTestModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [VideoGameDetailComponent],
    providers: [
      {
        provide: Location, useValue: mockLocation
      },
      {
        provide: VideoGameListingStore, useValue: mockVideoGameListingStore
      }
    ]
  }));
  beforeEach(() => {
    support =
      new TestComponentSupport<VideoGameDetailComponent>(VideoGameDetailComponent);
    support.component.videoGame = {
      id: '90',
      title: 'asteroids',
      favorite: false
    };
    support.detectChanges();
  });
  it('should have the correct title', () => {
    expect(support.getInnerHtml('h2')).toContain('asteroids');
  });
  it('should go back', async(inject([Location], (location: Location) => {
    spyOn(location, 'back');
    expect(location.back).toHaveBeenCalledTimes(0);
    support.component.goBack();
    expect(location.back).toHaveBeenCalledTimes(1);
  })));
  it('should toggle favorite', async(inject([VideoGameListingStore], (videoGameListingStore: VideoGameListingStore) => {
    spyOn(videoGameListingStore, 'toggleFavorite');
    support.component.toggleFavorite();
    expect(videoGameListingStore.toggleFavorite).toHaveBeenCalledWith('90');
  })));
});
