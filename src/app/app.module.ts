import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {RouterStoreModule} from '@ngrx/router-store';

import {VideoGamesModule} from './videoGames/videoGames.module';
import {VideoGamesDetailModule} from './videoGames/detail/detail.module';

import {AppComponent} from './app.component';
import {rootRoutes} from './app.routes';
import {rootReducer} from './store/rootReducer';

import {VideoGameListingStore} from './store/videoGameListing/videoGameListing.store';
import {VideoGameListingEffects} from './store/effects';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRoutes),
    StoreModule.provideStore(rootReducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(VideoGameListingEffects),
    VideoGamesModule,
    VideoGamesDetailModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    VideoGameListingStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
