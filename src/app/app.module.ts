import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PicComponent } from './pic/pic.component';
import { TxtComponent } from './txt/txt.component';
import { SmdComponent } from './smd/smd.component';

@NgModule({
  declarations: [
    AppComponent,
    PicComponent,
    TxtComponent,
    SmdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
