import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {IAppState} from '../../interfaces/appState.interface';
import {IVideoGame} from '../../interfaces/videoGame/videoGame.interface';
import {IVideoGameDetail} from '../../interfaces/videoGameDetail/videoGameDetail.interface';

@Injectable()
export class VideoGameDetailStore {

  constructor(private store: Store<IAppState>) {

  }

  getVideoGame(videoGameId: number): Observable<IVideoGame> {
    return this.store.select(appState => appState.videoGameListing.videoGames)
      .map(videoGames => videoGames.find(videoGame => videoGame.id === videoGameId));
  }

  getVideoGameDetail(): Observable<IVideoGameDetail> {
    return this.store.select(appState => appState.videoGameDetail);
  }

}