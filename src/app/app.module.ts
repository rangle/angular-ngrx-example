import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';

import {VideoGamesModule} from './videoGames/videoGames.module';
import {VideoGamesDetailModule} from './videoGames/detail/detail.module';

import {AppComponent} from './app.component';
import {rootRoutes} from './app.routes';
import {rootReducer} from './store/rootReducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRoutes),
    StoreModule.provideStore(rootReducer),
    VideoGamesModule,
    VideoGamesDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
