import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TempComponent } from './temp/temp.component';
import { WeightComponent } from './weight/weight.component';
import { VolumeComponent } from './volume/volume.component';
import { LengthComponent } from './length/length.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TempComponent,
    WeightComponent,
    VolumeComponent,
    LengthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
