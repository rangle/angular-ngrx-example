import { async, fakeAsync, tick } from '@angular/core/testing';
import { configureTestModule } from '../../../../test/configure-test-module.function';
import { TestComponentSupport } from '../../../../test/test-component-support.class';

import { VideoGameSearchComponent } from './video-game-search.component';

let support;
describe('video game search component', () => {
  beforeEach(configureTestModule({
    declarations: [VideoGameSearchComponent]
  }));
  beforeEach(() => {
    support = new TestComponentSupport<VideoGameSearchComponent>(VideoGameSearchComponent);
  });
  it('should emit change event with text after 300 ms', fakeAsync(() => {
    spyOn(support.component.queryChanged, 'emit');
    support.component.onChange('abc');
    support.component.query$.subscribe(query => {
    });
    tick(200);
    expect(support.component.queryChanged.emit).not.toHaveBeenCalled();
    tick(100);
    expect(support.component.queryChanged.emit).toHaveBeenCalledWith('abc');
  }));
});
