import {APP_BASE_HREF} from '@angular/common';
import {async} from '@angular/core/testing';
import {RouterModule} from '@angular/router';

import {configureTestModule} from '../../../test/configure-test-module.function';
import {RootComponent} from './root.component';
import {TestComponentSupport} from '../../../test/test-component-support.class';

describe('RootComponent', () => {
  let support;

  beforeEach(configureTestModule({
    imports: [
      RouterModule.forRoot([])
    ],
    providers: [
      { provide: APP_BASE_HREF, useValue : '/' }
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
