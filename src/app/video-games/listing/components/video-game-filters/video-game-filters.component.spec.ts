import { async, inject } from '@angular/core/testing';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TestComponentSupport } from '../../../../test/test-component-support.class';
import { configureTestModule } from '../../../../test/configure-test-module.function';
import { VideoGameFiltersComponent } from './video-game-filters.component';

@Component({
  selector: 'app-favorite-toggle',
  template: '<button class="fav-toggle" (click)="onToggle.emit()">Heart</button>'
})
class MockFavoriteToggleComponent {
  @Input() public active;
  @Output() public onToggle = new EventEmitter<any>();
  constructor() {
  }
}

describe('video game filters component', () => {
  let support: TestComponentSupport<VideoGameFiltersComponent>;
  beforeEach(configureTestModule({
    declarations: [
      MockFavoriteToggleComponent,
      VideoGameFiltersComponent
    ]
  }));
  beforeEach(() => {
    support = new TestComponentSupport<VideoGameFiltersComponent>(VideoGameFiltersComponent);
    support.component.platforms = ['one', 'two', 'three'];
    support.component.filters = {
      platform: 'one',
      favorites: false
    };
  });
  it('should emit the favorites filter changed event', async(() => {
    spyOn(support.component.favoritesFilterChanged, 'emit');
    support.querySelector('.fav-toggle').click();
    expect(support.component.favoritesFilterChanged.emit).toHaveBeenCalled();
  }));
});
