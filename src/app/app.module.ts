import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedTwitterComponent } from './components/main/feed-twitter/feed-twitter.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FeedTwitterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
