import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;

  @Output() delete = new EventEmitter<number>();
  @Output() like = new EventEmitter<number>();

  onDeleteClick(): void {
    this.delete.emit(this.product.id);
  }

  onLikeClick(): void {
    this.like.emit(this.product.id);
  }

  onShareClick(): void {
    // Формируем URL для публикации в Telegram
    const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(this.product.urlStore)}&text=${encodeURIComponent('Посмотрите этот товар: ' + this.product.title)}`;
    window.open(telegramShareUrl, '_blank');
  }
}
