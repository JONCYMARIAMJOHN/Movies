import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDescriptionComponent } from './movie-description/movie-description.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PlyrModule } from 'ngx-plyr';

@NgModule({
  declarations: [
    AppComponent,
    MovieDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    PlyrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
