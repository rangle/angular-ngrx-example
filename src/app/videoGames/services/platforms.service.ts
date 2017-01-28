import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {platforms} from './platformsResult';

@Injectable()
export class PlatformsService {

  getAll(): Observable<Array<string>> {
    return Observable.create(observer => {
      observer.next(platforms);
      observer.complete();

      return () => {

      };
    });
  }

}