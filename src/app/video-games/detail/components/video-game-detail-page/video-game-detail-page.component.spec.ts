import { async } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { configureTestModule } from '../../../../test/configure-test-module.function';
import { TestComponentSupport } from '../../../../test/test-component-support.class';
import { Observable } from 'rxjs/Rx';

import { VideoGameDetailPageComponent } from './video-game-detail-page.component';
import { VideoGameListingStore } from '../../../store/video-game-listing/video-game-listing.store';


let support;
let component;
let fixture;

describe('video game detail page component', () => {
  const mockVideoGameListingStore = {
    getVideoGame: videoGameId => Observable.of({
      videoGameId,
      name: 'abc'
    })
  };
  const mockActivatedRoute = {
    params: Observable.of({
      videoGameId: 123
    })
  };
  beforeEach(configureTestModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [VideoGameDetailPageComponent],
    providers: [
      {
        provide: ActivatedRoute, useValue: mockActivatedRoute
      },
      {
        provide: VideoGameListingStore, useValue: mockVideoGameListingStore
      }
    ]
  }));

  beforeEach(() => {
    support = new TestComponentSupport<VideoGameDetailPageComponent>(VideoGameDetailPageComponent);
    fixture = support.fixture;
    component = support.component;
  });

  it('should get the video game with the videoGameId from route param',
    async(() => {
      fixture.detectChanges();
      component.videoGame$.subscribe(videoGame => {
        expect(videoGame).toEqual({ name: 'abc', videoGameId: 123 });
      });
    })
  );

});
