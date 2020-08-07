import {
  MAPBOX_API_KEY, // ngx-mapbox-gl uses this injection token to provide the accessToken
  NgxMapboxGLModule,
} from 'ngx-mapbox-gl';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface MapGLModuleConfig {
  mapboxToken: string;
}

@NgModule({
  declarations: [],
  exports: [],
  imports: [
      CommonModule,
      NgxMapboxGLModule,
  ],
})
export class MapGLModule {
  static forRoot(config: MapGLModuleConfig): ModuleWithProviders<MapGLModule> {
      return {
          ngModule: MapGLModule,
          providers: [
              {
                  provide: MAPBOX_API_KEY,
                  useValue: config.mapboxToken,
              },
          ],
      };
  }
}
