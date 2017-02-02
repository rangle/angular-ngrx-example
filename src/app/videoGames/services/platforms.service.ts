import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {platforms} from './platformsResult';

@Injectable()
export class PlatformsService {

  public getAll(): Observable<Array<string>> {
    return Observable.create(observer => {
      observer.next(platforms);
      observer.complete();

      return () => {

      };
    });
  }

}
