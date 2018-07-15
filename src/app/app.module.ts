import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { FactoryListComponent } from './factory-list/factory-list.component';
import { PaperclipProducerComponent } from './paperclip-producer/paperclip-producer.component';

@NgModule({
  declarations: [
    AppComponent,
    FactoryListComponent,
    PaperclipProducerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
