import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LesionesComponent } from './Ventanas/lesiones/lesiones.component';


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LesionesComponent
=======
>>>>>>> 311097e0dfefc2395bf470cec16182f2fe2e6091
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
