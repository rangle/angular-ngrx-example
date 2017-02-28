import {async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {configureTestModule} from '../../../test/configure-test-module.function';
import {RootComponent} from './root.component';
import {TestComponentSupport} from '../../../test/test-component-support.class';

describe('RootComponent', () => {
  let support;

  beforeEach(configureTestModule({
    imports: [
      RouterTestingModule.withRoutes([])
    ],
    declarations: [
      RootComponent
    ],
  }));

  it('should create the app', async(() => {
    support = new TestComponentSupport<RootComponent>(RootComponent);
    expect(support.component).toBeTruthy();
  }));

});
