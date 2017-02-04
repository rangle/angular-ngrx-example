import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {ApiService} from '../../root/services/api/api.service';

@Injectable()
export class PlatformsService {

  constructor(private apiService: ApiService) {

  }

  public getAll(): Observable<Array<string>> {
    return this.apiService.get('/5895c55a290000a31a3f4356');
  }

}
