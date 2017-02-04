import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {ApiService} from '../../root/services/api/api.service';
import {IVideoGame} from '../interfaces/video-game/video-game.interface';

@Injectable()
export class VideoGamesService {

  constructor(private apiService: ApiService) {

  }

  public getAll(): Observable<Array<IVideoGame>> {
    return this.apiService.get('/5895c537290000a31a3f4355');
  }

}
