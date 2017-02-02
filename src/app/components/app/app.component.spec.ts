/* tslint:disable:no-unused-variable */

import {APP_BASE_HREF} from '@angular/common';
import {TestBed, async} from '@angular/core/testing';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';


describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }
      ],
      declarations: [
        AppComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
