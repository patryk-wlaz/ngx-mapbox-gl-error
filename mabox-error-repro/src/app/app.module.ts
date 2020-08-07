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
    NgxMapboxGLModule.withConfig({ // comment those lines and MapGLModule does nothing
      accessToken: token, // (mgl-map is not an angular component etc.)
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
