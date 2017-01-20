import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {VideoGamesModule} from './videoGames/videoGames.module';
import {VideoGamesDetailModule} from './videoGames/detail/detail.module';

import {AppComponent} from './app.component';
import {rootRoutes} from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRoutes),
    VideoGamesModule,
    VideoGamesDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
