import { FavouriteComponent } from './favourite/favourite.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { EncryptComponent } from './encrypt/encrypt.component';
import { ArrayService } from './array.service';

@NgModule({
  declarations: [
    AppComponent,
    EncryptComponent,
    FavouriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ArrayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
