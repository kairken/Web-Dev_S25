import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];

  onDelete(productId: number) {
    // Удаляем продукт по id
    this.products = this.products.filter(p => p.id !== productId);
  }

  onLike(productId: number) {
    // Увеличиваем число лайков для найденного продукта
    this.products = this.products.map(p =>
      p.id === productId ? { ...p, likes: p.likes + 1 } : p
    );
  }
}
