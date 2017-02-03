import {APP_BASE_HREF} from '@angular/common';
import {async} from '@angular/core/testing';
import {RouterModule} from '@angular/router';

import {configureTestModule} from '../../test/configureTestModule';
import {AppComponent} from './app.component';
import {TestComponentSupport} from '../../test/testComponentSupport';

describe('AppComponent', () => {
  let support;

  beforeEach(configureTestModule({
    imports: [
      RouterModule.forRoot([])
    ],
    providers: [
      { provide: APP_BASE_HREF, useValue : '/' }
    ],
    declarations: [
      AppComponent
    ],
  }));

  it('should create the app', async(() => {
    support = new TestComponentSupport<AppComponent>(AppComponent);
    expect(support.component).toBeTruthy();
  }));

});
