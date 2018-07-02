import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { FactoryListComponent } from './factory-list/factory-list.component';
import { SharedService } from './shared.service';

@NgModule({
  declarations: [
    AppComponent,
    FactoryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, [SharedService]]
})
export class AppModule { }
