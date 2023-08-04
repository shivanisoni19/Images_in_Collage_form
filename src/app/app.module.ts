import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ImageCollageComponent } from './image-collage/image-collage.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HighlightNumberDirective } from './highlight-number.directive';

@NgModule({
  declarations: [
    AppComponent,
    ImageCollageComponent,
    HighlightNumberDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
