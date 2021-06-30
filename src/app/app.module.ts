import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeaponCardComponent } from './weapon-card/weapon-card.component';
import { WeaponListComponent } from './weapon-list/weapon-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WeaponCardComponent,
    WeaponListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
