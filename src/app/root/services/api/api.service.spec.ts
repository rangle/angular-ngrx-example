import { TestBed, async, inject } from '@angular/core/testing';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { ApiService } from './api.service';

let mockHttp;
let apiService: ApiService;

describe('ApiService', () => {
  beforeEach(() => {
    mockHttp = {
      get: (path) => {
        return Observable.of({
          json: () => {
            return {
              abc: 123
            };
          }
        });
      }
    };
    spyOn(mockHttp, 'get').and.callThrough();
    apiService = new ApiService(mockHttp);
  });
  it('should use the mocky.io/v2 url', (done) => {
    apiService.get('/videogames').subscribe(() => {
      expect(mockHttp.get).toHaveBeenCalledWith('http://www.mocky.io/v2/videogames');
      done();
    });
  }
  );
  it('should return the request body', (done) => {
    apiService.get('videogames').subscribe(result => {
      expect(result).toEqual({ abc: 123 });
      done();
    });
  }
  );
});

