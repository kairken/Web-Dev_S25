import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductGalleryComponent  // Добавьте сюда ваш компонент
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
