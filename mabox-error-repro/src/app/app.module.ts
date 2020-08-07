import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapGLModule } from './mapgl/mapgl.module';
import { ChallengesMapComponent } from './challenges-map/challenges-map.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

const token = 'getItFromMapBox';

@NgModule({
  declarations: [
    AppComponent,
    ChallengesMapComponent,
  ],
  imports: [
    BrowserModule,
    MapGLModule.forRoot({
        mapboxToken: token,
    }),
    NgxMapboxGLModule.withConfig({
      accessToken: token,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
