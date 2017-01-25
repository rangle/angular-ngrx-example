import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {IVideoGame} from '../interfaces/videoGame.interface';

@Injectable()
export class VideoGamesService {

  getAll(): Observable<Array<IVideoGame>> {
    return Observable.create([
      {
        id: 1,
        title: 'The Legend of Zelda: Breath of the Wild',
        description: 'description',
        youTubeUrl: 'https://youtu.be/zw47_q9wbBE'
      },
      {
        id: 2,
        title: 'Super Mario Odyssey',
        description: 'description',
        youTubeUrl: 'https://youtu.be/5kcdRBHM7kM'
      }
    ]);
  }

}