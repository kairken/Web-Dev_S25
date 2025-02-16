import { Component } from '@angular/core';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';

@Component({
  selector: 'app-root',
  standalone: true,  // Указываем, что компонент standalone
  imports: [ProductGalleryComponent],  // Импортируем компонент галереи
  template: `<app-product-gallery></app-product-gallery>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
